import classNames from 'classnames'
import React from 'react'
import { StyledIconButton } from './iconButton.styles'

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outlined' | 'destructive'
  icon: React.FC
}

const IconButton: React.FC<IconButtonProps> = ({
  variant = 'primary',
  className,
  icon: Icon,
  ...rest
}) => {
  const iconButtonClassNames = classNames({
    [variant]: true.valueOf,
    [className ?? '']: !!className,
  })
  return (
    <StyledIconButton className={iconButtonClassNames} {...rest}>
      <Icon />
    </StyledIconButton>
  )
}

export default IconButton
