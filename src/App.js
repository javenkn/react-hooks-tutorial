import React, { useEffect, useState } from 'react';
import './App.css';
import { useForm } from './useForm';
import { Hello } from './Hello';
import { useFetch } from './useFetch';

function App() {
  const [values, handleChange] = useForm({ email: '', password: '' });
  const [showHello, setShowHello] = useState(true);

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem('count')),
  );
  const { data, isLoading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  // persist the count using localStorage
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  /**
   * useEffect is useful for event listeners
   */
  // useEffect(() => {
  //   const onMouseMove = e => {
  //     console.log(e);
  //   };
  //   window.addEventListener('mousemove', onMouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', onMouseMove);
  //   };
  // }, []);

  /**
   * useEffect mounts in order
   */
  // useEffect(() => {
  //   console.log('mount 1');
  // }, []);

  // useEffect(() => {
  //   console.log('mount 2');
  // }, []);

  return (
    <div className='App'>
      <div>{isLoading ? '...Loading' : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <button onClick={() => setShowHello(!showHello)}>Toggle Hello</button>
      {showHello && <Hello />}
      <input
        type='text'
        name='email'
        value={values.email}
        onChange={handleChange}
      />
      <input
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
