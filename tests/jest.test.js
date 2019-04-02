import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/components/App.jsx'

it('should render App component w/o throwing an error', () => {
  const test = document.createElement('div');
  ReactDOM.render(<App />, div);
  console.log('true');
  ReactDOM.unmountComponentAtNode(div);
});

// function sum(a, b) {
//   return a + b;
// }

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// all tests for jest need to be in <thing>.test.js format
