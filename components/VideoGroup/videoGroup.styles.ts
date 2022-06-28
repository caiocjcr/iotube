import styled, { css } from 'styled-components'

export const VideoGroupWrapper = styled.section`
  margin: 32px 0px;
  width: 100%;
`

export const TitleWrapper = styled.div`
  width: 100%;
  margin-bottom: 8px;
  padding: 0px 16px 8px;

  @media (min-width: 768px) {
    padding: 0px 0px 8px;
  }
`

export const VideoGroupTitle = styled.h2(
  ({ theme }) => css`
    font-size: 24px;
    font-weight: 300;
    border-bottom: 1px solid ${theme.border};
    padding-bottom: 8px;
  `
)

export const VideoList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-padding: 16px;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (min-width: 768px) {
    scroll-padding: unset;
  }
`

export const VideoSnippetContainer = styled.article`
  margin: 0px 16px;
  scroll-snap-align: start;
  width: 100vw;

  @media (min-width: 768px) {
    width: unset;
    margin: 0px 32px;
  }
`
