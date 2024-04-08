import { useEffect, useRef } from 'react';

export const useDebounce = (callback: (args: string) => void, delay: number) => {
  const timeoutRef:React.MutableRefObject<any> = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = (args:string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(args);
    }, delay);
  };

  return debouncedCallback;
};