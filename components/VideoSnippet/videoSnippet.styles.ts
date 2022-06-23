import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const ThumbnailWrapper = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  width: 100%;

  @media (min-width: 768px) {
    width: 360px;
  }
`

export const InfoWrapper = styled.div`
  padding: 0px 16px;

  @media (min-width: 768px) {
    width: 320px;
    padding: 0px;
  }
`

export const VideoTitle = styled.h3`
  margin: 0px 0px 8px;
`

export const VideoDescription = styled.h6`
  margin: 8px 0px;
`

export const VideoChannel = styled.h5`
  margin: 8px 0px;
`
