import React from 'react'
import styled from 'styled-components'
import logo from '../logo.svg'
import { TitleSlide } from 'react-presents'

const LogoContainer = styled.div`
  width: 400px;
  animation: App-logo-spin infinite 20s linear;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  > img {
    width: 100%;
    height: auto;
  }
`

const slide = ({ stepIndex }) => (
  <TitleSlide style={{ backgroundColor: '#000'}}>
    <LogoContainer>
      <img src={logo} alt="React Logo" />
    </LogoContainer>
    <h1>{slide.title}</h1>
  </TitleSlide>
)

slide.title = 'Thank you'

export default slide