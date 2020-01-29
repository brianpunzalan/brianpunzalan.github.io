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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.4.0/backbone-min.js"></script>
    <script> 
      var app = {}
      var MyModel = {}

      $(document).ready(function () {
        app.model = Backbone.Model.extend({
          defaults: {
            title: 'Hello World'
          }
        })

        app.view = Backbone.View.extend({
          tagName: 'h1',
          el: '#root',
          initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.render();
          },
          render: function () {
            this.$el.html(this.model.get('title'));
            return this;
          }
        })

        MyModel = new app.model()

        new app.view({ model: MyModel })
      });

      // Update model to update view
      // MyModel.set('title', 'Hello Brian!')
    </script>
  </body>
</html>`

const dimLines = {
  1: [[0, 1], [38, 39]],
  2: [[0, 1], [38, 39]],
  3: [[0, 1], [38, 39]],
  4: [[0, 1], [38, 39]],
  5: [[0, 1], [38, 39]],
}
const highlightLines = {
  1: [[3, 5]],
  2: [[11, 29]],
  3: [[30, 30]],
  4: [[32, 32]],
  5: [[36, 36]],
}

const slide = ({ stepIndex }) => (
  <ContentSlide>
    <h1>{slide.title} | <Colored>Vanilla -> JQuery -> Backbone.js -> React.js</Colored></h1>
    <hr />
    <br />
    <Step index={1} exact>
      <p>Include Backbone.js and its dependencies</p>
    </Step>
    <Step index={2} exact>
      <p>Declare model and view.</p>
    </Step>
    <Step index={3} exact>
      <p>Initialize model</p>
    </Step>
    <Step index={4} exact>
      <p>Initialize view and register the `MyModel` instance as its data model</p>
    </Step>
    <Step index={5} exact>
      <p>Update model to update the view</p>
    </Step>
    <Code
      dimLines={dimLines[stepIndex]}
      highlightLines={highlightLines[stepIndex]}
      value={code}
    />
  </ContentSlide>
)

slide.title = 'Backbone.js'

export default slide