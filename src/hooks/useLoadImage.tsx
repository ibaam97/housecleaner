import { useEffect } from "react";
import { useState } from "react";

const useLoadImage = (src: string, callback?: () => any) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(false)
    const img = new Image();
    img.src = src;
    img.onload = function () {
      setIsLoaded(true);
      if (callback) callback();
    };
  }, [src]);
  return isLoaded;
};

export default useLoadImage;
