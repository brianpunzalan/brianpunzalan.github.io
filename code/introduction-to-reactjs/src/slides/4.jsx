import React from 'react'
import styled from 'styled-components'
import { ContentSlide, Step, Code } from 'react-presents'

const Colored = styled.span`
  color: #F92672
`

const code = 
`<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script>
      $(document).ready(function () {
        var header = document.createElement('h1');
        $(header).html('Hello World');
        $('#root').append(header);
      });
    </script>
  </body>
</html>`

const dimLines = {
  1: [[0, 1], [3,4], [13, 14]],
  2: [[0, 1], [3,4], [13, 14]],
  3: [[0, 1], [3,4], [13, 14]],
  4: [[0, 1], [3,4], [13, 14]],
  5: [[0, 1], [3,4], [13, 14]],
  6: [[0, 1], [3,4], [13, 14]],
}
const highlightLines = {
  1: [[2, 2]],
  2: [[5, 5]],
  3: [[7, 7]],
  4: [[8, 8]],
  5: [[9, 9]],
  6: [[10, 10]],
}

const slide = ({ stepIndex }) => (
  <ContentSlide>
    <h1>{slide.title} | <Colored>Vanilla -> JQuery -> Backbone.js -> React.js</Colored></h1>
    <hr />
    <br />
    <Step index={1} exact>
      <p>Include JQuery library</p>
    </Step>
    <Step index={2} exact>
      <p>DOM element with id <Colored>root</Colored> with empty child nodes.</p>
    </Step>
    <Step index={3} exact>
      <p>Document ready event executes a callback function after page has been loaded.</p>
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

slide.title = 'JQuery'

export default slide