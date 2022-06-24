import styled from 'styled-components'

export const VideoSnippetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    width: clamp(192px, 100vw, 680px);
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
