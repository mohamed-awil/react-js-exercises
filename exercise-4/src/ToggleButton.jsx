import { useState } from "react";

export const ToggleButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  function change() {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <p>The button is {isVisible ? "ON" : "OFF"} </p>
      <button onClick={change}>Turn {isVisible ? "OFF" : "ON"}</button>
    </>
  );
};
