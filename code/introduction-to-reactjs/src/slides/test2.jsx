import React from 'react'
import styled from 'styled-components'
import { ContentSlide } from 'react-presents'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'


const LiveContainer = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: center;
`

const headerProps = { text: 'I\'m styled!' };
const scope = { styled, headerProps };
const code = `
  const Header = styled.div\`
    color: pelevioletred;
    font-size: 18px;
  \`

  render(<Header>{headerProps.text}</Header>)
`

const slide = () => (
  <ContentSlide>
    <LiveProvider code={code} scope={scope} noInline={true}>
      <h1>{slide.title}</h1>
      <LiveContainer>
        <LiveEditor 
          style={{
            width: '50%',
            backgroundColor: 'rgb(50, 42, 56)'
          }}
        />
        <LivePreview 
          style={{
            width: '50%',
            padding: '15px',
            backgroundColor: '#fff',
            color: '#000'
          }}
        />
      </LiveContainer>
      <LiveError />
    </LiveProvider>
  </ContentSlide>
)

slide.title = 'Live Preview'

export default slide
