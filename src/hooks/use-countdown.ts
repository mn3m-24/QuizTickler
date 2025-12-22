import { useEffect, useState, useCallback } from 'react';

const useCountdown = (endTime: number, onEnd: () => void) => {
  // func to calculate the remaining time (wraped in useCallback because it is used as a dep in useEffect)
  const calculateRemaining = useCallback(() => {
    return Math.max(0, endTime - Date.now());
  }, [endTime]);
  // lazy initialize the remaining time to not call the calculateRemaining function every render
  // using calculateRemaining() right away calls it every render and then ignore it because timeLeft state is already initialized
  const [timeLeft, setTimeLeft] = useState(() => calculateRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const remaining = calculateRemaining();
      setTimeLeft(remaining);
      if (remaining <= 0) {
        clearInterval(intervalId);
        onEnd();
      }
    }, 1000);
    return () => clearInterval(intervalId); // cleanup function
  }, [calculateRemaining, onEnd]); // onEnd is wrapped in useCallback in the parent component
  return timeLeft;
};

export default useCountdown;
