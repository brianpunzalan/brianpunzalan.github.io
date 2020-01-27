import React from 'react'
import { ContentSlide, Code } from 'react-presents'

const code = `function ExampleComponent ({ foo, bar }) {
  return (
    <div foo={foo}>
      {bar}
    </div>
  )
}`

const dimLines = {
  0: [[0, 1], [5, 6]]
}
const highlightLines = {
  1: [[0, 0], [2, 2]]
}

const slide = ({ stepIndex }) => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <Code
      dimLines={dimLines[stepIndex]}
      highlightLines={highlightLines[stepIndex]}
      value={code}
    />
  </ContentSlide>
)

slide.title = 'Title'

export default slide