import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

export const App = () => {
  const testfetch = () => {
    fetch(`http://localhost:3000/api/test`).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" color="primary" onClick={testfetch}>
          Hello World
        </Button>
      </header>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('index'));