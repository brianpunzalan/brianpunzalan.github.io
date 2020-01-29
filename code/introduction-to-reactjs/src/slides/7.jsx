import React from 'react'
import styled from 'styled-components'
import { ContentSlide, Step } from 'react-presents'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import reactLifecycleImage from '../assets/react-lifecycle.PNG'
import databinding from '../assets/databinding.jpg'

const Colored = styled.span`
  color: #F92672
`

const ImageContainer = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-around;
  margin-bottom: 25px;
  
  > img {
    width: ${props => Boolean(props.width) ? props.width : '75%' };
    height: auto;
  }
`

const LiveContainer = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: center;
`

// JSX Code
const Hello = props => <div>Hello {props.name}</div>
const jsxCodeScope = { Hello }
const jsxCode = `<Hello name="Brian" />`

// Simple Component
const simpleComponentCode = 
`class Hello extends React.Component {
  render() {
    return (
      <div id="root">
        Hello {this.props.name}
      </div>
    )
  }
}

/** 
 *  ReactDOM.render(
 *    <Hello name="Brian" />, 
 *    document.getElementById('root')
 *  )
 **/ 
render(<Hello name="Brian" />)`

const functionalCode =
`// Functional Component (Recommended)
function Hello(props) {
  return (
    <div id="root">
      Hello {props.name}
    </div>
  )
}
render(<Hello name="Brian" />)`

const classBasedCode = 
`// Class-based Component (Still relevant, but not recommended already)
class Hello extends React.Component {
  render() {
    return (
      <div id="root">
        Hello {this.props.name}
      </div>
    )
  }
}
render(<Hello name="Brian" />)`

const propsStateCode =
`class Tick extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.initialCount || 0,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((state, props) => {
        return {
          count: state.count + 1
        }
      })
    }, 1000)
  }

  render() {
    return (
      <p>{this.state.count}</p>
    )
  }
}

render(<Tick initialCount={10} />)`

const eventHandlingCode =
`class Tick extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.initialCount || 0,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState((state, props) => {
      return {
        count: state.count + 1,
      }
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button disabled={this.props.disabled} onClick={this.handleClick}>Add 1</button>
      </div>
    )
  }
}

render(<Tick initialCount={10} disabled={true} />)`

const conditionalRenderingCode =
`class Tick extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.initialCount || 0,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState((state, props) => {
      return {
        count: state.count + 1,
      }
    })
  }

  render() {
    return (
      <div>
        { this.props.show && <p>{this.state.count}</p>  }
        { this.state.count % 2 === 0
          ? <p>Even</p> 
          : <p>Odd</p> 
        }
        <button disabled={this.props.disabled} onClick={this.handleClick}>Add 1</button>
      </div>
    )
  }
}

render(<Tick initialCount={10} disabled={true} show={true} />)`

const listsAndKeysCode = 
`class ItemList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.items.map(item => {
            // Always pass a 'key' if you want to render an array nodes
            return <li key={item.id}>{item.value}</li>
          })
        }
      </ul>
    )
  }
}

render(
  <ItemList 
    items={[
      { id: '0001', value: 'Item One' },
      { id: '0002', value: 'Item Two' },
      { id: '0003', value: 'Item Three' },
    ]}
  />
)`

const formsCode = 
`class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(\`Name: $\{this.state.name}, Email: $\{this.state.email}\`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label inputFor="name">
          Name
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label inputFor="email">
          Email
          <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

render(<Form />)`

const compositionCode = 
`class Textfield extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.value} {...this.props} />
        <br />
        <br />
        <p>{this.props.value}</p>
      </div>
    )
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Brian'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form>
        <Textfield value={this.state.name} name="name" onChange={this.handleChange} />
      </form>
    )
  }
}

render(<Form />)`

const slide = () => (
  <ContentSlide>
    <h1>{slide.title} | <Colored>React.js</Colored></h1>
    <hr />
    <br />
    <Step index={1} maxIndex={3}>
      <h2>Declarative (Functional)</h2>
    </Step>
    <Step index={2} maxIndex={3}>
      <h2>Component-Based</h2>
    </Step>
    <Step index={3} maxIndex={3}>
      <h2>Learn Once, Write Anywhere</h2>
    </Step>
    <Step index={4} maxIndex={5}>
      <h2><Colored>JSX</Colored></h2>
      <p>Syntactic-sugar for writing React components.</p>
      <p>It is a syntax extension to Javascript.</p>
      <p>It produces React "elements".</p>
      <p>Please name your JSX components in Pascal Case. (ex. MyComponent)</p>
      <LiveProvider code={jsxCode} scope={jsxCodeScope}>
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
      <br />
      <br />
    </Step>
    <Step index={6} maxIndex={6}>
      <h2>Our `Hello` Component</h2>
      <LiveProvider code={simpleComponentCode} noInline={true}>
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
    </Step>
    <Step index={7} maxIndex={7}>
      <h2>Functional and Class-based Component</h2>
      <LiveProvider code={functionalCode} noInline={true}>
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
      <br />
      <br />
      <LiveProvider code={classBasedCode} noInline={true}>
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
    </Step>
    <Step index={8} maxIndex={8}>
      <h2>Props and State</h2>
      <p><Colored>Props</Colored> are read-only values and these are the "parameters" to a React Component, just like a function</p>
      <p><Colored>States</Colored> are internal state values of a React Component. It is private and fully controlled by the component.</p>
      <LiveProvider code={propsStateCode} noInline={true}>
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
    </Step>
    <Step index={9} maxIndex={9}>
      <h2>Component Lifecycle</h2>
      <span>* This is for class-based components only</span>
      <ImageContainer>
        <img src={reactLifecycleImage} alt="React Lifecycle" />
      </ImageContainer>
    </Step>
    <Step index={10} maxIndex={10}>
      <h2>Event Handling</h2>
      <LiveProvider code={eventHandlingCode} noInline={true}>
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
    </Step>
    <Step index={11} maxIndex={11}>
      <h2>Conditional Rendering</h2>
      <LiveProvider code={conditionalRenderingCode} noInline={true}>
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
    </Step>
    <Step index={12} maxIndex={12}>
      <h2>Rendering Lists and Keys</h2>
      <LiveProvider code={listsAndKeysCode} noInline={true}>
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
    </Step>
    <Step index={13} maxIndex={13}>
      <h2>Forms</h2>
      <LiveProvider code={formsCode} noInline={true}>
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
    </Step>
    <Step index={14} maxIndex={14}>
      <h2>Composition</h2>
      <LiveProvider code={compositionCode} noInline={true}>
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
    </Step>
    <Step index={15} maxIndex={15}>
      <h2>One-way vs Two-way data binding</h2>
      <ImageContainer width="50%">
        <img src={databinding} alt="Data binding" />
      </ImageContainer>
    </Step>
    <Step index={16} maxIndex={23}>
    <h2>How to Think in React?</h2>
    </Step>
    <Step index={17} maxIndex={21}>
      <h3>Step 1: Break the UI into A Component Hierarchy</h3>
      <p><Colored>* For example, your form component could be cut into pieces with different fields such as buttons, textfields, etc</Colored></p>
    </Step>
    <Step index={18} maxIndex={21}>
      <h3>Step 2: Build a Static Version in React</h3>
      <p><Colored>* Develop the UI without props and states, just to visualize it.</Colored></p>
    </Step>
    <Step index={19} maxIndex={21}>
      <h3>Step 3: Identify the minimal (but complete) representation of the UI State</h3>
      <p><Colored>* For example, you don't want to have both 'items' and 'itemsCount' state since 'items' is enough to represent the state by just calling <code>items.length</code> we could determine the 'itemsCount'</Colored></p>
    </Step>
    <Step index={20} maxIndex={21}>
      <h3>Step 4: Identify where your state should live</h3>
      <p><Colored>* You don't want the state of your components to be scattered around that doesn't needs it. Identify which component should be the owner of that state.</Colored></p>
    </Step>
    <Step index={21} maxIndex={21}>
      <h3>Step 5: Add Inverse Data Flow</h3>
      <p><Colored>* An example to do this is, your Form component has to pass a callback function <code>handleChange</code> on the input component's <code>onChange</code> props. The input component would execute that callback function for every state change and pass an event object that includes its state value.</Colored></p>
    </Step>
    <Step index={22}>
      <h3>Since React uses <Colored>one-way data binding model</Colored>, it is recommended to use a <Colored>unidirectional</Colored> flow of data.</h3>
    </Step>
    <Step index={23}>
      <h3>React uses <Colored>Virtual DOM</Colored> that makes it render and update the DOM very fast. It only updates whats necessary.</h3>
    </Step>
  </ContentSlide>
)

slide.title = 'The Basics'

export default slide