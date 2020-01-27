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
    <i>"A javascript library for building user interfaces"</i>
    <br />
    <h2><i className='fa fa-github' /> <a href='https://github.com/facebook/react' rel="noopener noreferrer" target="_blank">github.com/facebook/react</a></h2>
    <p>January 31, 2020</p>
  </TitleSlide>
)

slide.title = 'An Introduction to React.js'

export default slide