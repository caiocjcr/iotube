import { useRouter } from 'next/router'
import React, { useCallback, useRef, useState } from 'react'
import {
  AutoCompleteContainer,
  AutoCompleteItem,
  IconWrapper,
  InputWrapper,
  StyledInput,
} from './input.styles'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label?: string
  wrapperClassName?: string
  error?: string | boolean | undefined
  icon?: React.FC
  autoCompleteOptions?: string[]
}

const Input: React.FC<InputProps> = ({
  name,
  error,
  wrapperClassName,
  icon: Icon = null,
  autoCompleteOptions,
  ...rest
}) => {
  const { push } = useRouter()
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  const showAutoComplete = useCallback(() => {
    const outsideClickListener = (e: MouseEvent) => {
      if (e.target && !ref.current?.contains(e.target as Node)) {
        setIsFocused(false)
        document.removeEventListener('click', outsideClickListener)
      }
    }
    document.addEventListener('click', outsideClickListener)
    setIsFocused(true)
  }, [])

  const handleSearch = (query: string) => {
    push(`/search?q=${query}`)
    setIsFocused(false)
  }

  return (
    <InputWrapper ref={ref} className={wrapperClassName ?? ''}>
      <StyledInput
        name={name}
        error={!!error}
        withIcon={!!Icon}
        autoComplete="off"
        role="presentation"
        onFocus={showAutoComplete}
        {...rest}
      ></StyledInput>
      {Icon && (
        <IconWrapper>
          <Icon />
        </IconWrapper>
      )}
      {!!autoCompleteOptions?.length && isFocused && (
        <AutoCompleteContainer id="autocomplete-box">
          {autoCompleteOptions.map((term, index) => (
            <AutoCompleteItem
              onClick={() => handleSearch(term)}
              key={`search-history-${index}`}
            >
              {term}
            </AutoCompleteItem>
          ))}
        </AutoCompleteContainer>
      )}
    </InputWrapper>
  )
}

export default Input
