import React, { useState } from 'react';
import './App.css';

import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0); // useState always return an Array, like [state value, function that updates its value]

  function handleButtonClick() {
    setCounter(counter + 1); // setCounter is the second param of useState applied to counter
  }

  return (
    <div>
      <Header title={`Next Level Week #${counter}`} />

      <h2>{counter}</h2>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
  );
}

export default App;
