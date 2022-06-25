import styled from 'styled-components'
// TODO: use styled-components theme provider
import theme from '@/styles/theme'

export const VideoSnippetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    width: clamp(192px, 100vw, 680px);
  }

  .thumbnail-container {
    &:after {
      content: '';
      height: 4px;
      width: 0px;
      background-color: ${theme.primary};
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      transition: width 0.2s ease-out;
    }
  }

  &:hover {
    .thumbnail-container {
      &:after {
        width: 100%;
      }
    }
  }
`

export const ThumbnailContainer = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  width: 100%;

  @media (min-width: 768px) {
    width: 360px;
    flex-shrink: 0;
  }
`
