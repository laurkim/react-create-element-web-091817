// Code goes here
import React from 'react';
import ReactDOM from 'react-dom';

// creating parent & children elements
// const title = React.createElement('h1', {}, 'My First React Code');
// const paragraph = React.createElement('p', {}, 'Content inside a p tag');
// const container = React.createElement('div', {}, [title, paragraph]);
//
// ReactDOM.render(
//   container,
//   document.getElementById('global')
// );

// creating heavily nested children
// const list =
//   React.createElement('div', {},
//     React.createElement('h1', {}, 'My favorite ice cream flavors'),
//     React.createElement('ul', {},
//     [
//       React.createElement('li', {}, 'None, because I was blessed with lactose intolerance')
//     ]
//   )
// );
//
// ReactDOM.render(
//   list,
//   document.getElementById('global')
// );

// adding attributes to elements
const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
    [
      React.createElement('li', { className: 'none' }, 'None'),
      React.createElement('li', { className: 'still-none' }, 'Still None'),
      React.createElement('li', { className: 'guess' }, 'You guessed it. None.')
    ]
  )
);

ReactDOM.render(
  list,
  document.getElementById('global')
);
