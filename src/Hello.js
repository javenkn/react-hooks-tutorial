import React, { useRef, useState, useEffect } from 'react';
import { useFetch } from './useFetch';

export const Hello = () => {
  const renders = useRef(0);
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem('count')),
  );
  const { data, isLoading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  // persist the count using localStorage
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  console.log('Hello renders: ', renders.current++);

  return (
    <div>
      Hello
      <div>{isLoading ? '...Loading' : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
    </div>
  );
};
