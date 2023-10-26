import { useState, useEffect } from 'react';

function useWidth(): number {
  const isClient = typeof window === 'object'; 

  const [windowWidth, setWindowWidth] = useState<number>(
    isClient ? window.innerWidth : 1200
  );

  useEffect(() => {
    if (!isClient) {
      return; 
    }

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
}

export default useWidth;
