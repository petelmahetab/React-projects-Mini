import { useState, useEffect } from "react";

const useCustomHook = () => {
  const [Time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const StartTimer = () => setIsRunning(true);
  const StopTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  useEffect(() => {
    if (!isRunning) return; // Stop effect when timer is not running

    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup to avoid memory leaks
  }, [isRunning]); // Depend on isRunning state

  const hr = (time) => String(Math.floor(time / 3600)).padStart(2, "0");
  const min = (time) => String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const sec = (time) => String(Math.floor(time % 60)).padStart(2, "0");

  return { Time, StartTimer, StopTimer, hr, min, sec };
};

export default useCustomHook;
