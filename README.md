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