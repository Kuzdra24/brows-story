import { useState, useEffect } from "react";

function useElementVisibility(id: string) { 
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    const element = document.getElementById(id); 
    if (element) {
      const rect = element.getBoundingClientRect();
      setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibility);
    handleVisibility(); 
    return () => {
      window.removeEventListener("scroll", handleVisibility);
    };
  }, [id]); 

  return isVisible;
}

export default useElementVisibility;
