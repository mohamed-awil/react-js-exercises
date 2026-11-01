import { useState } from "react";
export function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  };

  function deccrease() {
    setCount(count - 1);
  };

  const isDisabled = count < 1;

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={deccrease} disabled={isDisabled}>
        Decrease
      </button>
      <button onClick={increase}>Increase</button>
    </>
  );
}
