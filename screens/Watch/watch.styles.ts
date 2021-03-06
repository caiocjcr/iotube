import styled from 'styled-components'

export const WatchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

export const InfoWrapper = styled.div`
  width: clamp(192px, 100vw, 680px);
`

export const VideoContainer = styled.div`
  aspect-ratio: 16 / 9;
  width: clamp(192px, 100vw, 680px);
  iframe {
    width: 100%;
    height: 100%;
  }
`
