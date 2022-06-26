import styled from 'styled-components'

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ErrorNotice = styled.h2`
  margin-top: 64px;
  text-align: center;
  font-weight: 300;
  line-height: 64px;

  .sad {
    font-size: 72px;
  }
`

export const VideoSnippetContainer = styled.article`
  margin: 16px 0px;

  &:first-child {
    margin-top: 0px;
  }

  &:last-child {
    margin-bottom: 0px;
  }
`
