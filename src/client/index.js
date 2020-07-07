import React from 'react';
import ReactDOM from 'react-dom';

fetch('/api/').then((response) => {
  console.log(response.json());
})

export const App = () => {
  return (
    <div>Hello React!</div>
  )
};

ReactDOM.render(<App />, document.getElementById('index'));