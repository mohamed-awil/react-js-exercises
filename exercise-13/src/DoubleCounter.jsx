import { useReducer } from "react";

export const DoubleCounter = function () {
  // intial value
  const counter = {
    counterA: 0,
    counterB: 0,
  };

  const [state, dispatch] = useReducer(reducer, counter);
  console.log(state);

  function reducer(state, action) {
    switch (action.type) {
      case "decrementA":
        return { ...state, counterA: state.counterA - 1 };
      case "incrementA":
        return { ...state, counterA: state.counterA + 1 };

      case "decrementB":
        return { ...state, counterB: state.counterB - 1 };
      case "incrementB":
        return { ...state, counterB: state.counterB + 1 };

      case "resetBoth":
        return counter;

      default:
        return state;
    }
  }

  const resetDis = state.counterA < 1 && state.counterB < 1;

  return (
    <>
      <h1>Double Counter</h1>
      <h2>CounterA: {state.counterA}</h2>
      <button
        onClick={() => dispatch({ type: "decrementA" })}
        disabled={state.counterA < 1}
      >
        A-
      </button>
      <button onClick={() => dispatch({ type: "incrementA" })}>A+</button>
      <h2>CounterB: {state.counterB}</h2>
      <button
        onClick={() => dispatch({ type: "decrementB" })}
        disabled={state.counterB < 1}
      >
        B-
      </button>
      <button onClick={() => dispatch({ type: "incrementB" })}>B+</button>{" "}
      <br />
      <button
        onClick={() => dispatch({ type: "resetBoth" })}
        disabled={resetDis}
      >
        Reset Both
      </button>
    </>
  );
};
