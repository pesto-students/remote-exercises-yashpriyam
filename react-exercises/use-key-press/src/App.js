import React, { useState } from 'react';
import useKeyPress from './useKeyPress';
import './App.css';

function App() {
  const [key, setKey] = useState(null);

  function handlekeydown(e) {
    setKey(e.key);
  }

  const keyPressed = useKeyPress(key);

  return (
    <>
    <label>Input the key You want to subscribe to:</label>
    <input onKeyDown={handlekeydown}></input>
    <div>
        {
          keyPressed ? (
          <h1>Pressed</h1>
          ) : (
          <h2>Not Pressed</h2>
          )
        }
    </div>
    </>
  );
}

export default App;
