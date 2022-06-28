import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: clamp(192px, 1580px, 100vw);
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 16px;
  }
`
