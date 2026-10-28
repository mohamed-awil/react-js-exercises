import { useState, useEffect } from "react";

export const CountDownTimer = () => {
  const [time, setTime] = useState(30);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;

    if (isRunning) {
      timerId = setInterval(() => {
        setTime((prev) => {
          if (prev > 0) {
            return prev - 1;
          }

          return prev;
        });
      }, 1000);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [isRunning]);

  function handleStart() {
    setIsRunning(true);
  };

  function handleStop() {
    setIsRunning(false);
  };

  function handleReset() {
    setTime(30);
  };

  return (
    <>
      <h1>Countdown Timer</h1>

      <p>Set Time (Seconds):</p>
      <input type="number" onChange={(e) => setTime(e.target.value)} />

      <p>Time Left: {time} Seconds</p>

      <button onClick={handleStart} disabled={isRunning || time < 1}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning || time < 1}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
