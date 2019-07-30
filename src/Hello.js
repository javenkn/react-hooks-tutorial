import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { useFetch } from './useFetch';
import { useMeasure } from './useMeasure';

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
  const [rect, divRef] = useMeasure(data);

  return (
    <div>
      Hello
      <div style={{ display: 'flex' }}>
        <div ref={divRef}>{isLoading ? '...Loading' : data}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
    </div>
  );
};
