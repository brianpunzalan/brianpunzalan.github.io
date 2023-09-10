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
    <Step index={1} maxIndex={4}>
      <h2>What are pure functions?</h2>
      <br />
    </Step>
    <Step index={2} maxIndex={4}>
      <p>Pure functions are functions that always returns the same result if the same arguments are passed.</p>
    </Step>
    <Step index={2} maxIndex={4}>
      <p>You may think of them as <i>mathematical formulas</i>.</p>
      <br />
    </Step>
    <Step index={3} maxIndex={4}>
      <Code
        value={pureFunctionExample}
      />
      <br />
    </Step>
    <Step index={4} maxIndex={4}>
      <p>It normally has two characteristics to make it called a <i>Pure Function</i></p>
      <ul>
        <li><b>No Mutations</b>. It does not change any objects or variables that existed before it was called (outside the function scope).</li>
        <li><b>Same inputs, same output</b>. Given the same inputs, a pure function should always return the same result.</li>
      </ul>
      <br />
    </Step>
    <Step index={5} maxIndex={10}>
      <h2>Why this is is relevant to React?</h2>
    </Step>
    <Step index={6} maxIndex={8}>
      <p>React assumes that every component you write is a pure function such that for every same inputs it should always return the same <b>JSX</b>.</p>
    </Step>
    <Step index={7} maxIndex={8}>
      <p>React is designed around this concept which is why it favors functional programming.</p>
    </Step>
    <Step index={8} maxIndex={8}>
      <p>Components are much more predictable if they are pure. We call these components <Colored>Pure Component</Colored></p>
    </Step>
    <Step index={9} maxIndex={9}>
      <p>Below is an example of <b>NOT</b> a Pure Component</p>
    </Step>
    <Step index={9} maxIndex={9}>
      <LiveProvider theme={theme} code={impureComponentExample} noInline={true}>
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
    <Step index={10} maxIndex={10}>
      <p>Below is an example of a Pure Component</p>
    </Step>
    <Step index={10} maxIndex={10}>
      <LiveProvider theme={theme} code={pureComponentExample} noInline={true}>
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
      <h2>Why does React care about purity?</h2>
      <p>It unlocks the following opportunities:</p>
      <ul>
        <li>Components could run to different such as the <i>server</i>. Since they return with same result for the same inputs, one component can serve many requests. <Colored>(Server Components)</Colored></li>
        <li>Improved performance by skipping rendering of the components whose inputs have not changed. This is safe because pure functions always return the same results, so they are safe to cache. <Colored>(Memoization with <code>useMemo</code> or <code>memo</code>)</Colored></li>
        <li>If data changes in the middle of the rendering a deep component tree, React can restart the rendering without wasting time to finish the outdated render. Purity makes it safe to stop calculating at any time.</li>
      </ul>
      <p>Every new feature of React takes advantage of purity, from data fetching, animations, upto performance. Keeping components pure unlocks the power of the React paradigm</p>
      <br />
      <span>Reference: <a>https://react.dev/learn/keeping-components-pure#why-does-react-care-about-purity</a></span>
    </Step>
  </ContentSlide>
)

slide.title = 'Pure Functions'

export default slide