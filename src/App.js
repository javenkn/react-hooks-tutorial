import React, { useState, useRef } from 'react';
import './App.css';
import { useForm } from './useForm';
import { Hello } from './Hello';

function App() {
  const [values, handleChange] = useForm({ email: '', password: '' });
  const [showHello, setShowHello] = useState(true);
  const inputRef = useRef();
  const hello = useRef(() => {
    console.log('hello');
  });

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
