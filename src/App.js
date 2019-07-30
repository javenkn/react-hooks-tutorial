import React, { useState, useRef, useLayoutEffect } from 'react';
import './App.css';
import { useForm } from './useForm';
import { Hello } from './Hello';
import { useMeasure } from './useMeasure';

function App() {
  const [values, handleChange] = useForm({ email: '', password: '' });
  const [showHello, setShowHello] = useState(true);
  const inputRef = useRef();
  const hello = useRef(() => {
    console.log('hello');
  });
  const [rect, inputRef2] = useMeasure();

  // useLayoutEffect(() => {
  //   console.log(inputRef.current.getBoundingClientRect());
  // }, []);

  return (
    <div className='App'>
      <button onClick={() => setShowHello(!showHello)}>Toggle Hello</button>
      {showHello && <Hello />}
      <input
        type='text'
        name='email'
        value={values.email}
        onChange={handleChange}
        ref={inputRef}
      />
      <input
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
        ref={inputRef2}
      />
      <button
        onClick={() => {
          inputRef.current.focus();
          hello.current();
        }}
      >
        focus
      </button>
    </div>
  );
}

export default App;
