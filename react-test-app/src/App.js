import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled ] = useState(false);
  return (
    <div className='App'>
      <header className='App-header'>
        <h3 data-testid='counter'>{counter}</h3>
        <div>
          <button onClick={() => setCounter((count) => count - 1)} disabled={disabled} data-testid='minus-button'>-</button>
          <button onClick={() => setCounter((count) => count + 1)} disabled={disabled} data-testid='plus-button'>+</button>
          <button onClick={() => setDisabled((prev) => !prev)} style={{backgroundColor: 'blue'}} data-testid='on/off-button'>on/off</button>
        </div>
      </header>
    </div>
  );
}

export default App;
