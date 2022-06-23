import styled, { css } from 'styled-components'

export const StyledIconButton = styled.button(
  ({ theme }) => css`
    border: none;
    margin: 0;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
    background: transparent;
    white-space: nowrap;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    transition: opacity 0.2s ease-in-out, color 0.3s ease-in-out;
    border-radius: 4px;

    &:not(:disabled) {
      cursor: pointer;
    }

    &.primary {
      background-color: ${theme.primary};
      > svg {
        color: ${theme.text};
      }
      &:hover {
        opacity: 0.8;
      }
    }

    &.outlined {
      border: 1px solid ${theme.primary};
      > svg {
        color: ${theme.primary};
      }
      &:hover {
        color: ${theme.text};
      }
    }

    &.destructive {
      background-color: ${theme.error};
      > svg {
        color: ${theme.text};
      }
      &:hover {
        opacity: 0.8;
      }
    }

    &:not(.outlined):disabled {
      background-color: #8a8a8a;
      > svg {
        color: #24252d;
      }
      &:hover {
        background-color: #8a8a8a;
        color: #24252d;
      }
    }

    &.outlined:disabled {
      border-color: #8a8a8a;
      > svg {
        color: #c2c2c3;
      }
    }

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  `
)
