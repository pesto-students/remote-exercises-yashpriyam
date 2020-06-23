import React, { useState, useEffect } from 'react';
import useKeyPress from './useKeyPress';
import './App.css';

function App() {
  const [key, setKey] = useState(null);

  function handlekeydown(e) {
    console.log(e.key);
    setKey(e.key);
  }

  useEffect(() => {}, [])
  const keyPressed = useKeyPress(key);
  console.log(keyPressed);
  

  return (
    <>
    <label>Input the key You want to subscribe to:</label>
    <input onKeyDown={handlekeydown}></input>
    <div>
        {
          keyPressed ? (
          <h2>{key} key pressed</h2>
          ) : (
          <h2>{key} key not pressed</h2>
          )
        }
    </div>
    </>
  );
}

export default App;
