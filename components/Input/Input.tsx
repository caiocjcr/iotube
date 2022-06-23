import React from 'react'
import { IconWrapper, InputWrapper, StyledInput } from './input.styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  wrapperClassName?: string
  error?: string | boolean | undefined
  icon?: React.FC
}

const Input: React.FC<InputProps> = ({
  name,
  error,
  wrapperClassName,
  icon: Icon = null,
  ...rest
}) => {
  return (
    <InputWrapper className={wrapperClassName ?? ''}>
      <StyledInput
        name={name}
        error={!!error}
        withIcon={!!Icon}
        {...rest}
      ></StyledInput>
      {Icon && (
        <IconWrapper>
          <Icon />
        </IconWrapper>
      )}
    </InputWrapper>
  )
}

export default Input
