import styled, { css } from 'styled-components'

export const VideoGroupWrapper = styled.section`
  margin: 32px 0px;
  width: 100%;

  .video-carousel {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
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

export const VideoSnippetContainer = styled.article`
  margin: 0px 16px;
  scroll-snap-align: start;
  width: 100vw;

  @media (min-width: 768px) {
    width: unset;
    margin: 0px 32px;
  }

  &:first-child {
    margin-left: 0px;
  }

  &:last-child {
    margin-right: 0px;
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  > * {
    flex-shrink: 0;
  }
`
