import styled from 'styled-components'

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const VideoSnippetContainer = styled.article`
  margin: 16px 0px;

  > svg {
    margin: 0 auto;
    display: block;
  }

  &:first-child {
    margin-top: 0px;
  }

  &:last-child {
    margin-bottom: 0px;
  }
`
