import React from 'react'
import styled from 'styled-components'
import ssrImage from '../assets/ssr.png'
import csrImage from '../assets/csr.png'
import ssrTTI from '../assets/server-rendering-tti.png'
import csrTTI from '../assets/client-rendering-tti.png'
import { ContentSlide, Step } from 'react-presents'

const Colored = styled.span`
  color: #F92672
`

const ImageContainer = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-around;
  margin-bottom: 25px;
  
  > img {
    width: 35%;
    height: auto;
  }
`

const slide = ({ stepIndex }) => (
  <ContentSlide>
    <h1>{slide.title} | <Colored>CSR vs SSR</Colored></h1>
    <hr />
    <br />
    <Step index={1} maxIndex={2}>
      <h2>SSR refers to <Colored>Server-side</Colored> Rendering</h2>
    </Step>
    <Step index={2} maxIndex={2}>
      <h2>CSR refers to <Colored>Client-side</Colored> Rendering</h2>
    </Step>
    <Step index={3} maxIndex={6}>
      <h2><Colored>Server-side Rendering</Colored></h2>
      <p>Requests coming from a client (browser) is being processed by the server and response a string of HTML markup that has already been "rendered" by the server to be consumed by the client which is the browser.</p>
    </Step>
    <Step index={4} maxIndex={6}>  
      <ImageContainer>
        <img src={ssrImage} alt="SSR" />
        <img src={ssrTTI} alt="SSR TTI" />
      </ImageContainer>
    </Step>
    <Step index={5} maxIndex={6}>
      <h3>Pros:</h3>
      <p>> Good for SEO.</p>
      <p>> Faster initial page load.</p>
    </Step>
    <Step index={6} maxIndex={6}>
      <h3>Cons:</h3>
      <p>> Navigation to other pages is slow since you need to refetch it in the server.</p>
    </Step>
    <Step index={7} maxIndex={10}>
      <h2><Colored>Client-side Rendering</Colored></h2>
      <p>Requests coming from a client (browser) is being processed by the server and response a string of HTML markup but content is not "rendered" yet. Content would be "rendered" on the browser via javascript.</p>
    </Step>  
    <Step index={8} maxIndex={10}>
      <ImageContainer>
        <img src={csrImage} alt="CSR" />
        <img src={csrTTI} alt="CSR TTI" />
      </ImageContainer>
    </Step>
    <Step index={9} maxIndex={10}>
      <h3>Pros:</h3>
      <p>> Navigation to other pages is almost realtime since javascript already knows what to render and does not need to request to server.</p>
    </Step>
    <Step index={10} maxIndex={10}>  
      <h3>Cons:</h3>
      <p>> Bad for SEO since crawlers cannot gather content that is only being rendered using javascript</p>
      <p>> Long TTI (Time to Interactive)</p>
    </Step>
  </ContentSlide>
)

slide.title = 'Rendering on the Web with React'

export default slide