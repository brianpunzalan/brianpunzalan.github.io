import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { Presentation, Slide, DropDownNav } from 'react-presents'

// Include codemirror default css
require('codemirror/lib/codemirror.css');

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  code {
    color: #F92672;
  }
`

const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 50px;
  background-color: #000;
  color: #fff;

  .Select.VirtualizedSelect {
    color: initial;
  }
`

let slides = []
const context = require.context('./slides', false, /\.jsx|\.js$/)
context.keys().forEach(key => slides.push(context(key).default))

const options = slides.map((slide, index) => ({
  label: slide.title,
  value: index
}))
.filter((option) => option.label)

function App() {

  return (
    <Container>
      <GlobalStyle />
      <Presentation>
        {slides.map((Component, index) => (
          <Slide
            component={Component}
            key={index}
          />
        )).concat(
          <DropDownNav
            key='DropDownNav'
            options={options}
          />
        )}
      </Presentation>
    </Container>
  );
}

export default App;
