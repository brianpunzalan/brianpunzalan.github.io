import React from 'react'
import styled from 'styled-components'
import { ContentSlide, Step, Code } from 'react-presents'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import theme from 'prism-react-renderer/themes/dracula'

const Colored = styled.span`
  color: #087EA4;
`

const LiveContainer = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: center;
`

const pureFunctionExample = 
`// below functions are pure functions
const sum = (a: number, b: number) => a + b;
const multiply = (a: number, b: number) => a * b;
const one = () => 1;

// testing pure functions
console.log(sum(1, 1) === sum(1, 1)) // true
console.log(multiply(1, 2) === multiply(1, 2))
console.log(one() === 1))

// below functions are impure functions
const impureAdd = (a: number, b: number) => a + b + Math.floor(Math.random() * 10);
let impureMultiply = function(a, b) {
  return a * b * this.c;
}

// testing impure functions
console.log(impureAdd(1, 2) !== impureAdd(1, 2)) // false (sometimes true)
this.c = 10;
console.log(impureMultiply(1, 2)) // 20
this.c = 100;
console.log(impureMultiply(1, 2)) // 200
impureMultiply = impureMultiply.bind({ c: 1 });
console.log(impureMultiply(1, 2)) // 2
`

const impureComponentExample = 
`// reference: https://react.dev/learn/keeping-components-pure
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}

render(<TeaSet />)`

const pureComponentExample = 
`// reference: https://react.dev/learn/keeping-components-pure
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}

render(<TeaSet />)`

const slide = ({ stepIndex }) => (
  <ContentSlide>
    <h1>{slide.title} | <Colored>Advanced React.js</Colored></h1>
    <hr />
    <br />
    <Step index={1} maxIndex={8}>
      <p>At some point, components need to change something. It cannot fully embrace purity. These changes are what we call <b>side effects</b></p>
    </Step>
    <Step index={2} maxIndex={8}>
      <p><Colored>Side effects</Colored> are the things that happen <i>"on the side"</i>, not during rendering.</p>
    </Step>
    <Step index={3} maxIndex={8}>
      <p>Example of which were updating the screen, starting animation, changing the data, syncing state to global store, etc.</p>
    </Step>
    <Step index={4} maxIndex={8}>
      <p>Side effects usually belong inside <Colored>Event Handlers</Colored>.</p>
      <br />
    </Step>
    <Step index={5} maxIndex={8}>
      <h2>Side effect with <Colored>Event Handlers</Colored></h2>
      <p>Event Handlers are functions that perform some action, such as clicking a button.</p>
      <p>They don't run during rendering so they don't need to be pure functions.</p>
      <p>Thus, they could modify external state outside the component scope.</p>
      <br />
    </Step>
    <Step index={6} maxIndex={8}>
      <h2>Side effect with <Colored>useEffect</Colored></h2>
      <p>Another way to trigger an effect, is through <Colored><code>useEffect</code></Colored></p>
    </Step>
    <Step index={7} maxIndex={8}>
      <p>Only use this if there are no other options and we cant find the right event handler for the side-effect.</p>
      <p><b>This approach should be your last resort as it could increase re-renders within your component.</b></p>
    </Step>
    <Step index={8} maxIndex={8}>
      <p><b>When possible, try to express logic with rendering alone.</b></p>
    </Step>
  </ContentSlide>
)

slide.title = 'Side Effects'

export default slide