import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  position: relative;
`

interface StyledInputProps {
  error?: boolean
  withIcon?: boolean
}

export const StyledInput = styled.input<StyledInputProps>(
  ({ error = false, withIcon = false, theme }) => css`
    all: unset;
    box-sizing: border-box;
    height: 40px;
    padding: 0px 12px;
    width: 100%;
    font-weight: normal;
    font-size: 14px;
    border: 1px solid ${theme.border};
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.2);
    ${withIcon ? 'padding-left: 48px' : ''};
    ${error
      ? `border: 1px solid ${theme.error};`
      : `&:focus {
            border: 1px solid ${theme.primary};
          }`}
    ::placeholder {
      color: #c2c2c3;
    }
    &:disabled {
      background-color: rgba(70, 70, 70, 0.3);
    }
  `
)

export const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
`

export const AutoCompleteContainer = styled.ul(
  ({ theme }) => css`
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid ${theme.border};
    background-color: ${theme.background};
    border-radius: 0px 0px 4px 4px;
    margin: 0;
    padding: 0;
    list-style-type: none;
    z-index: 10;
  `
)

export const AutoCompleteItem = styled.li(
  ({ theme }) => css`
    width: 100%;
    padding: 16px;
    color: ${theme.text};
    background-color: inherit;
    transition: background-color 0.1s ease-in;
    cursor: pointer;
    &:hover {
      background-color: ${theme.skeletonBackground}
    }
  `
)
