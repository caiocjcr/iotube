import styled, { css } from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0px 16px;
  display: grid;
  grid-template-columns: 112px 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 112px 1fr 112px;
  }

  .search-container {
    width: 100%;

    @media (min-width: 768px) {
      width: clamp(192px, 100vw, 640px);
    }
  }
`

export const SearchForm = styled.form`
  display: flex;
  align-self: center;
  justify-self: end;
  width: 100%;

  @media (min-width: 768px) {
    justify-self: center;
    width: unset;
  }
`

export const Logo = styled.a(
  ({ theme }) => css`
    font-size: 24px;
    cursor: pointer;
    align-self: center;
    padding: 0px 4px;
    justify-self: start;

    @media (min-width: 768px) {
      justify-self: center;
    }

    span {
      color: ${theme.primary};
      font-weight: bold;
    }
  `
)
