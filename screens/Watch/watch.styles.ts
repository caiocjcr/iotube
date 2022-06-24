import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

export const InfoContainer = styled.div`
  width: clamp(192px, 100vw, 680px);
  aspect-ratio: 16 / 9;
`

export const VideoContainer = styled.div`
  iframe {
    width: 100%;
    height: 100%;
  }
`
