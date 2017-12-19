'use strict';

console.log('app.js is running');

// JSX - JavaScript XML (JS syntax extension - not part of the core JS syntax)
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Does this change?!'
  ),
  ' ',
  React.createElement(
    'p',
    null,
    'Hello'
  )
);
var appRoot = document.getElementById(app);

ReactDOM.render(template, appRoot);
