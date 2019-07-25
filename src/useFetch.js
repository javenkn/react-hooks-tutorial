import { useEffect, useState } from 'react';

export const useFetch = url => {
  const [state, setState] = useState({ data: null, isLoading: true });

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetch(url);
      setState({ data: await data.text(), isLoading: false });
    };
    fetchApi();

    return () => {};
  }, [url]);

  return state;
};
