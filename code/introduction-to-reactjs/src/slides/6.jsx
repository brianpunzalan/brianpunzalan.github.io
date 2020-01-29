import React from 'react'
import styled from 'styled-components'
import { ContentSlide, Code } from 'react-presents'

const Colored = styled.span`
  color: #F92672
`

const code = 
`// index.html
<html>
  <body>
    <div id="root"></div>
    <script src="bundle.js"></script>
  </body>
</html>


// -----------------------------------------------------------------------------------------

// index.js (not built yet)
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'World'
    }

    this.changeName = this.changeName.bind(this)
  }

  state = {
    name: 'World'
  }

  changeName() {
    this.setState({ name: 'Brian' })
  }

  render() {
    return (
      <div id="app">
        <h1>Hello {this.state.name}</h1>
        <button onClick={this.changeName}>Click Me</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))`

const slide = () => (
  <ContentSlide>
    <h1>{slide.title} | <Colored>Vanilla -> JQuery -> Backbone.js -> React.js</Colored></h1>
    <hr />
    <br />
    <Code
      value={code}
    />
  </ContentSlide>
)

slide.title = 'React.js'

export default slide