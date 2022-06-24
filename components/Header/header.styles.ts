import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 16px;

  .search-container {
    width: clamp(192px, 100vw, 640px);
  }
`

export const SearchForm = styled.form`
  display: flex;
  max-width: 100%;
`
