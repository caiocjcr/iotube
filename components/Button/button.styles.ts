import styled, { css } from 'styled-components'

export const StyledButton = styled.button(
  ({ theme }) => css`
    border: none;
    margin: 0;
    height: 40px;
    padding: 0px 32px;
    width: auto;
    overflow: visible;
    background: transparent;
    font: inherit;
    line-height: normal;
    white-space: nowrap;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    transition: opacity 0.2s ease-in-out, color 0.3s ease-in-out;
    border-radius: 4px;

    &.full-w {
      width: 100%;
    }

    &:not(:disabled) {
      cursor: pointer;
    }

    &.primary {
      background-color: ${theme.primary};
      color: ${theme.text};
      &:hover {
        opacity: 0.8;
      }
    }

    &.outlined {
      border: 1px solid ${theme.primary};
      color: ${theme.primary};
      &:hover {
        color: ${theme.text};
      }
    }

    &.destructive {
      background-color: ${theme.error};
      color: ${theme.text};
      &:hover {
        opacity: 0.8;
      }
    }

    &:not(.outlined):disabled {
      background-color: #8a8a8a;
      color: #24252d;
      &:hover {
        background-color: #8a8a8a;
        color: #24252d;
      }
    }

    &.outlined:disabled {
      border-color: #8a8a8a;
      color: #c2c2c3;
    }

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  `
)
