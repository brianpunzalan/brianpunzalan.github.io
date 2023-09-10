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

const titleSlideStyle = {
  backgroundColor: '#fff',
  color: 'inherit',
}

const slide = ({ stepIndex }) => (
  <TitleSlide style={titleSlideStyle}>
    <LogoContainer>
      <img src={logo} alt="React Logo" />
    </LogoContainer>
    <h1>{slide.title}</h1>
    <i>"The library for web and native user interfaces"</i>
    <br />
    <p>September 12, 2023</p>
  </TitleSlide>
)

slide.title = 'Advanced React.js'

export default slide