import React from 'react'
import styled from 'styled-components'
import { ContentSlide, Step, Code } from 'react-presents'

const Colored = styled.span`
  color: #F92672
`

const firstLimit = 7

const sampleCode = 
`// declaring variables
var foo = 1;              // function scoped
let bar = 'hello world';  // block scoped (ES6)
const baz = null;         // block scoped and cannot be re-assigned (ES6)

// declaring named function
function foobar(name) {
  console.log(name);
}

// or

const barfoo = function() {
  return true;
}

// declaring an object
var foobaz = {
  name: 'Brian',
  age: 18
}

console.log(typeof foo);            // number 
console.log(typeof bar);            // string
console.log(typeof true);           // boolean
console.log(typeof baz);            // object
console.log(baz);                   // null
console.log(typeof foobar);         // function
console.log(typeof barfoo);         // function
console.log(typeof foobaz);         // object
console.log(typeof barbaz);         // undefined
console.log(typeof Symbol('foo'));  // symbol (ES5)

// calling a function
foobar('Hello World'); // prints 'Hello World'

// IIFE - Immediately invoked function expression
(function () {
  console.log('Unnamed function');
}()); // prints 'Unnamed function'
`

const callbackFunctionCode =
`// new to ES6 'async'
async function fetchData(params, callback) {
  // execute some asynchronous task
  const response = await doAsyncCall(params)

  // execute callback after the async call finished
  return callback(response)
}

async function doAsyncCall(params) {
  return params.id
}

function notify(data) {
  alert(data)
}

fetchData({ id: 1 }, notify)`

const arrowFunctionsCode = 
`// arrow function 'foo'
const foo = () => 'test'
// "equivalent" functionality with function 'foobar'
const foobar = function() {
  return 'test'
}

/**
 *  More expressive closure syntax
 **/
const numbers = [1,2,3,4];
const addedByOne = numbers.map(num => num + 1); // [2,3,4,5]


/**
 *  Handling context for lexical 'this'
 **/
const doSomething1 = function () {
  return this;
}

const doSomething2 = () => {
  return this;
}

let context = {
  doSomething1: doSomething1,
  doSomething2: doSomething2
}

doSomething1();         // window object
doSomething2();         // window object
context.doSomething1(); // context object
context.doSomething2(); // window object

// before, we bind the context using prototype function 'bind'
const doSomething3 = function() {
  return this;
}.bind(this);

context.doSomething3 = doSomething3

context.doSomething3(); // window object`

const parameterHandlingCode = 
`// Setting default parameter values
function foo (x, y = 1, z = 2) {
  return x + y + z;
}

foo(1);     // 4
foo(1,2);   // 5
foo(1,2,3)  // 6

// Rest parameter
function bar(x, y, ...z) {
  return (x + y) * z.length;
}

bar(1,2,1,2,3,4); // 1+2 * 4 = 12

const baz = [4,5,6];
console.log([1,2,3, ...baz]); // [1,2,3,4,5,6]

const foobar = {
  name: 'Brian',
  age: 18
}

const foobaz = {
  ...foobar
}

console.log(foobar === foobaz);           // false
console.log(foobar.name === foobaz.name); // true`

const classesCode = 
`class Shape1 {
  constructor (id, x, y) {
    this.id = id
    this.move(x,y)
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }
}

// equivalent to

var Shape2 = function(id, x, y) {
  this.id = id;
  this.move(x,y);
};
Shape2.prototype.move = function(x, y) {
  this.x = x;
  this.y = y;
}

// Inheritance
class Rectangle extends Shape1 {
  constructor (id, x, y, width, height) {
    super(id, x, y)
    this.width = width;
    this.height = height;
  }
}

const rect = new Rectangle('table', 0, 0, 200, 100); // start at coordinate (0,0)
rect.move(5,10); // move at coordinate (5,10)`

const modulesCode = 
`/**
 * lib/math.js
 **/

// named exports
export function sum (x, y) { return x + y };
export var pi = 3.141593;

// default export
export default (x) => Math.exp(x);

/**
 * app1.js
 **/
import * as math from "lib/math";
console.log("2π = " + math.sum(math.pi, math.pi));

/**
 * app2.js
 **/
import exp, { sum, pi } from "lib/math";
console.log("2π = " + sum(pi, pi));`

const slide = ({ stepIndex }) => (
  <ContentSlide>
    <h1>{slide.title} | <Colored>The scripting language for the Web</Colored></h1>
    <hr />
    <br />
    <Step index={1} maxIndex={firstLimit}>
      <p>It is a lightweight, interpreted, or just-in-time (JIT) compiled programming language with first-class functions.</p>
      <br />
    </Step>
    <Step index={2} maxIndex={firstLimit}>
      <p>It was mostly used as a scripting language for Web pages but could also be found in many non-browser environments such as <Colored>Node.js</Colored></p>
      <br />
    </Step>
    <Step index={3} maxIndex={firstLimit}>
      <p>It is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.</p>
    </Step>
    <Step index={4} maxIndex={firstLimit}>
      <p>=> Multi-paradigm means you could do a <Colored>Functional, Object-oriented, or Procedural</Colored> way of coding.</p>
    </Step>
    <Step index={5} maxIndex={firstLimit}>
      <p>=> <Colored>Dynamic typed language</Colored> infers that we don't need to explicitly declare variables to determine the type</p>
    </Step>
    <Step index={6} maxIndex={firstLimit}>
      <p>=> It is also a <Colored>weakly typed language</Colored> which provides flexibility but could also result to ambiguity and confusion to developers.</p>
    </Step>
    <Step index={7} maxIndex={firstLimit}>
      <p>The standard for Javascript is <Colored>ECMAScript (ES)</Colored>.</p>
    </Step>
    <Step index={8} maxIndex={8}>
      <h2>Sample</h2>
      <Code
        value={sampleCode}
      />
    </Step>
    <Step index={9} maxIndex={9}>
      <h2>Callbacks</h2>
      <Code
        value={callbackFunctionCode}
      />
    </Step>
    <Step index={10} maxIndex={10}>
      <h2>ES6 features - Arrow functions</h2>
      <Code
        value={arrowFunctionsCode}
      />
    </Step>
    <Step index={11} maxIndex={11}>
      <h2>ES6 features - Parameter Handling</h2>
      <Code
        value={parameterHandlingCode}
      />
    </Step>
    <Step index={12} maxIndex={12}>
      <h2>ES6 features - Classes</h2>
      <Code
        value={classesCode}
      />
    </Step>
    <Step index={13} maxIndex={13}>
      <h2>ES6 features - Classes</h2>
      <Code
        value={classesCode}
      />
    </Step>
    <Step index={14} maxIndex={14}>
      <h2>ES6 features - Modules</h2>
      <Code
        value={modulesCode}
      />
    </Step>
  </ContentSlide>
)

slide.title = 'Javascript'

export default slide