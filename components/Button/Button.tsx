import React from 'react'
import classnames from 'classnames'
import { StyledButton } from './button.styles'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outlined' | 'destructive'
  fullWidth?: boolean
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth = false,
  className,
  children,
  ...rest
}) => {
  const buttonClassNames = classnames({
    [variant]: true,
    'full-w': fullWidth,
    [className ?? '']: !!className,
  })
  return (
    <StyledButton className={buttonClassNames} {...rest}>
      {children}
    </StyledButton>
  )
}

export default Button
