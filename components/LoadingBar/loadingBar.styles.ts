import styled, { css, keyframes } from 'styled-components'

const loadingAnimation = keyframes`
  0% {
    width: 0vw;
    right: unset;
    left: 0;
  }
  25% {
    width: 100vw;
    right: unset;
    left: 0;
  }
  50% {
    width: 100vw;
    right: 0;
    left: unset;
  }
  75% {
    width: 0vw;
    right: 0;
    left: unset;
  }
  100% {
    width: 0vw;
    left: 0;
    right: unset;
  }
`

export const Bar = styled.rect(
  ({ theme }) => css`
    height: 4px;
    width: 0px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${theme.primary};

    &.loading {
      animation-name: ${loadingAnimation};
      animation-duration: 2.5s;
      animation-iteration-count: infinite;
    }
  `
)
