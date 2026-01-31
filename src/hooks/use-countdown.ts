import { useEffect, useState } from "react";

const useCountdown = (endTime: number, onEnd: () => void) => {
  const [timeLeft, setTimeLeft] = useState(() =>
    Math.max(0, endTime - Date.now())
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const remaining = Math.max(0, endTime - Date.now());
      setTimeLeft(remaining);

      if (remaining <= 0) {
        clearInterval(intervalId);
        onEnd();
      }
    }, 1000);

    return () => clearInterval(intervalId); // cleanup function
  }, [endTime, onEnd]); // onEnd is wrapped in useCallback in the parent component

  return timeLeft;
};

export default useCountdown;
