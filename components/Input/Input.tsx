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
  icon: Icon = null,
  ...rest
}) => {
  return (
    <InputWrapper>
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
