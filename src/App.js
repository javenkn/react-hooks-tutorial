import React, { useState, useCallback } from 'react';
import './App.css';
import { Hello } from './Hello';
import { Square } from './Square';

function App() {
  const [count, setCount] = useState(0);
  const favNums = [7, 21, 37];

  const increment = useCallback(
    n => {
      setCount(c => c + n);
    },
    [setCount],
  );

  return (
    <div className='App'>
      <Hello increment={increment} />
      <div>count: {count}</div>
      {favNums.map(n => {
        return <Square key={n} increment={increment} n={n} />;
      })}
    </div>
  );
}

export default App;
