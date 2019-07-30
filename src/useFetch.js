import { useEffect, useState, useRef } from 'react';

export const useFetch = url => {
  const isCurrent = useRef(true); // var to see if component unmounted
  const [state, setState] = useState({ data: null, isLoading: true });

  useEffect(() => {
    return () => {
      isCurrent.current = false; // when unmounting set to false
    };
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetch(url);
      if (isCurrent.current) {
        // component is still mounted
        setState({ data: await data.text(), isLoading: false });
      }
    };
    fetchApi();

    return () => {};
  }, [url]);

  return state;
};
