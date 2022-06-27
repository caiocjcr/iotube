import React, { useCallback, useState } from 'react'
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
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const toggleFocus = useCallback(() => setIsFocused(!isFocused), [isFocused])

  return (
    <InputWrapper className={wrapperClassName ?? ''}>
      <StyledInput
        name={name}
        error={!!error}
        withIcon={!!Icon}
        autoComplete="off"
        role="presentation"
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        {...rest}
      ></StyledInput>
      {Icon && (
        <IconWrapper>
          <Icon />
        </IconWrapper>
      )}
      {!!autoCompleteOptions?.length && isFocused && (
        <AutoCompleteContainer>
          {autoCompleteOptions.map((term, index) => (
            <AutoCompleteItem key={`search-history-${index}`}>
              {term}
            </AutoCompleteItem>
          ))}
        </AutoCompleteContainer>
      )}
    </InputWrapper>
  )
}

export default Input
