import styled from 'styled-components'

export const InfoWrapper = styled.div`
  padding: 0px 16px;

  @media (min-width: 768px) {
    width: 100%;
    padding: 0px;
  }
`

export const VideoTitle = styled.h3`
  margin: 0px 0px 8px;
  font-weight: 500;
  color: #fff;
`

export const VideoDescription = styled.h5`
  margin: 8px 0px;
`

export const VideoChannel = styled.h4`
  margin: 8px 0px;
  strong {
    font-weight: 500;
    color: #fff;
  }
`
