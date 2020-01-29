import React from 'react'
import styled from 'styled-components'
import { ContentSlide, Step, Code } from 'react-presents'

const Colored = styled.span`
  color: #F92672
`

const code = 
`<html>
  <body>
    <div id="root"></div>
    <script>
      window.onload = function () {
        var root = document.getElementById('root');
        var header = document.createElement('h1');
        header.innerHTML = 'Hello World'
        root.append(header);
      }
    </script>
  </body>
</html>`

const dimLines = {
  1: [[0, 1], [12, 13]],
  2: [[0, 1], [12, 13]],
  3: [[0, 1], [12, 13]],
  4: [[0, 1], [12, 13]],
  5: [[0, 1], [12, 13]],
  6: [[0, 1], [12, 13]],
}
const highlightLines = {
  1: [[2, 2]],
  2: [[4, 4]],
  3: [[5, 5]],
  4: [[6, 6]],
  5: [[7, 7]],
  6: [[8, 8]],
}

const slide = ({ stepIndex }) => (
  <ContentSlide>
    <h1>{slide.title} | <Colored>Vanilla -> JQuery -> Backbone.js -> React.js</Colored></h1>
    <hr />
    <br />
    <Step index={1} exact>
      <p>DOM element with id <Colored>root</Colored> with empty child nodes.</p>
    </Step>
    <Step index={2} exact>
      <p>Window onload event executes a callback function after page has been loaded.</p>
    </Step>
    <Step index={3} exact>
      <p>Get reference to element <Colored>root</Colored></p>
    </Step>
    <Step index={4} exact>
      <p>Programatically create <Colored>h1</Colored> element</p>
    </Step>
    <Step index={5} exact>
      <p>Update innerHTML of <Colored>h1</Colored> element with value 'Hello World'</p>
    </Step>
    <Step index={6} exact>
      <p>Append the created <Colored>h1</Colored> to <Colored>root</Colored> element as child.</p>
    </Step>
    <Code
      dimLines={dimLines[stepIndex]}
      highlightLines={highlightLines[stepIndex]}
      value={code}
    />
  </ContentSlide>
)

slide.title = 'Vanilla JS'

export default slide