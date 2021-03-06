# ModernReactWithRedux
Modern React with Redux course on Udemy


Components have two jobs, what to render and how to handle input. Components return `JSX`

ES5 version of Javascript is supported across all browsers. ES2016-ES-2019 version of Javascript don't have as strong of support across browsers.`Babel` is used to convert a newer version of Javascript to safer/lower Javascript version that is safe to run on all browsers. So we can continue writing ES2019 and it'll convert down.

`node_modules` folder that contains all project dependencies
`package.json` records all the dependencies for a project
`package-lock.json` records the exact version of the dependencies. Especially if we specify ranges of version in `package.json`

`CTRL + C` to stop, `yarn start` to start React app

`import React from 'react`

`import` We want to get code from another file or dependency
`React` the variable we want to assign the import to
`from` We are aobut to specify the name of file/library we are importing
`react` the name of the dependency OR path to file we're importing

Javascript sees we want `react` so it'll look in `node_modules` to find a folder by that name

`import` vs `require`. For example `const React = require("react")`. `import` refers to `ES2015` module system. `CommonJS` module systems corresponds to the `require`.

A component is a `Function` or `Class` that produces `HTML` to show a user (using JSX) and handles feedback from the user (via event handlers)

## Building Content with JSX

`Babel` is also used to process `JSX`. It converts to normal Javascript. So a simple function component like

```
const FunctionalComponent = () => {
    return <h3>Hello</h3>
}
```

would convert to 

```
const FunctionalComponent = () => {
  return /*#__PURE__*/React.createElement("h3", null, "Hello");
};
```

`JSX` can't render a standard javascript object as text. It'l blow up. Some `JSX` have forbiden property names that you can use.

## Communicating with Props

3 Tenets to follow with React. Nesting, Reusability, Configuration. Commponents should allow nesting, they should support reusability, and we should be able to configure the compnent with data, styles, etc

Props is the system for passing data from parent component down to child component (in order to configure it)

To pass you specify the name of the prop to the Component `<CommentDetail author="Adam" />`

Use `props.children` to fetch all the children that are within the component. Useful for styling and using containers

## Structuring Apps with Class Based Components.

Now Class Components can respond to life cycle methods and Functional components use the hooks system to do similar things

## State in React Components

props are passed into components. state is internal to a component. State is represented as a javascript `Object` that contains data relevant to the component. Updating state in a comoponent causes the component to re-render. State can only be updated call `setState`. The only time you assign to state directly is in the `constructor`

## Lifecycle Methods

Methods called during events in a Components lifecycle `constructor` -> `render` -> `componentDidMount` -> `componentWillUnmount` only render is required. Others are considered optional.

Data loading is great to occur in `componentDidMOunt` or `componentDidUpdate`. Use `componentWillUnmount` for data cleanup. Use `constrcutor` to set the initial `state` of the component.

Try avoiding multiple `return` statements in the render method. Instead break out conditional logic into a helper `function`

## Handling Forms and Events

Calling an outside API to fetch car images. Important props to pass callback functions to are `onClick`, `onChange`, and `onSubmit`. Can define a function or arrowFunction when passing event handlers to props on forms.

`Uncontrolled` element is one that isn't driven by any state. `Controlled` is one that is setting state on updates and dispalying current value of the state in the input. So be sure to set `value` and `onChange` props to make it controlled. `Uncontrolled` means that the actual html is the only thing that knows the true value of it's input. We want it to be in the React side. React should drive all our data not the DOM driving data.

`Controlled` is preferred because it allows us to do manipulation on the input/output data. When calling `bind` it makes a new function of the one it's calling `bind` for. That way `this` will point to the instance of our specific object.

# Understanding Hooks in React

Hooks give functional components additional functionality. Hooks give us functions like `useState` or `useEffect` to be used in a functional component. This helped bridge the gap between class components that could `setState`

Examples of primitive hooks that you get out the box are `useState`, `useEffect`, `useMemo`, `useCallback`. They are all included with React to give more functionality to functional components.

We can use these "primitive" hooks to build our own custom hooks.

|              | Class     | Function |
|--------------|-----------|------------|
| Init         | `state = {activeIndex: 0}`       |`useState(0)`       |
| Reference    | `this.state.activeIndex`         | `activeIndex`       |
| Updating     | `this.setState({activeIndex: 1})`| `setActiveIndex(1)`       |

`useEffect` can supply an optional argument to determine when it's run. `useEffect` is away to provide lifecycle type methods inside a functional component. If you leave the second argument off it'll run on first render and every rerender. If you have an `[]` empty array. It'll only run once for the initial render. If you provide a list of values in the array it'll run when those values change.

Events and Clicks can only be triggered or listened to by elements that a Component can create. What if you wanted to hear clicks from an element that another component has not created. For example a `Dropdown` component wants to listen to a click on the `body` tag.

Event bubbling is when the Browser creates an event (say for a click on an item). It then keeps bubbling up to parent elements. If that parent has an event handler it can be executed. 

# Redux

A state management library (same state in class based components ). Removing state from components. Keep components just to display data.

Redux is independent from React. The same concepts have been ported over to other programming languages.

Redux Cycle

Action Creator -> Action -> dispatch -> Reducers -> State

Insurance Analogy 

Person dropping off Form -> The Form(Type & Payload) -> Form Receiver -> Departments -> Company wide compiled data

Reducers Process the Action and Decide how to update it's data. 

```
// Action Creator
const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name,
      amount
    }
  }
}

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name
    }
  }
}

const createClaim = (name, amount) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name,
      amount
    }
  }
}

// Reducers
const claimHistory(previousClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    // Add the new claim payload to the array
    // Always avoid modifying existing data structure
    // Make a copy and modify and return a new value
    return [...previousClaims, action.payload]
  } else {
    return previousClaims
  }
}

const store = createStore(ourReducers)
const action = createClaim('Adam', 20)
store.dispatch(action)

store.getState()
```

https://codepen.io/sgrider/pres/oQjBvG


# Named vs Default Exports

If you name a file in a folder `index.js` and just `import path/to/file` Webpack will automatically import the file.

`Named` import means you have to specify the name of the functions you're using. `Default` means you export everything with `export default`. However, default only allows exporting one component per file.

With default you can also name it whatever you want.

```
Named examples
export const Hello = () => {  
  return <h1>Hello</h1>;
}  

export const Goodbye = () => {
  return <h2>Goodbye</h2>; 
} 

import { Hello, Goodbye } from "./Greetings"; 

<Hello />
<Goodbye />

or 

import * as Greetings from "./Greetings"; 
<Greetings.Hello /> 

```

```
Default examples 

const fn1 = () => {} 
const fn2 = () => {}  
export default {  fn1, fn2 } 

import Fns from "./functions";
Fns.fn1();
```