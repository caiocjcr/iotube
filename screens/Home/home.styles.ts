import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: clamp(192px, 1580px, 100vw);
  margin: 0 auto;
  padding-bottom: 32px;

  @media (min-width: 768px) {
    padding: 0 16px;
  }
`

export const NewUserWelcome = styled.h2`
  font-weight: 300;
  margin-top: 32px;
  text-align: center;
  padding: 16px;

  @media (min-width: 768px) {
    margin-top: 64px;
  }
`
