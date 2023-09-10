import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { Presentation, Slide, DropDownNav } from 'react-presents'

// Include codemirror default css
require('codemirror/lib/codemirror.css');

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Optimistic Display,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    margin: 0;
    padding: 0;
  }

  code {
    color: #087EA4;
  }

  a {
    color: #087EA4;
  }

  button {
    background-color: #087EA4;
  }

  .Select.VirtualizedSelect {
    color: inherit;
  }
`

const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 50px;
  background-color: #fff;
  color: #23272F;
`

let slides = []
const context = require.context('./slides', false, /\.jsx|\.js$/)
context.keys().forEach(key => slides.push(context(key).default))

const options = slides.map((slide, index) => ({
  label: slide.title,
  value: index
}))
.filter((option) => option.label)

const dropdownNavStyle = {
  backgroundColor: '#087EA4',
}

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
        ))}
        <DropDownNav
          style={dropdownNavStyle}
          key='DropDownNav'
          options={options}
        />
      </Presentation>
    </Container>
  );
}

export default App;
