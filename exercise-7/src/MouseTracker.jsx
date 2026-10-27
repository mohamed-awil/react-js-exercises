import { useState, useEffect } from "react";

export const MouseTracker = () => {
  const [sizes, setSizes] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
    setSizes({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <p>Mouse X: {sizes.x}</p>
      <p>Mouse Y: {sizes.y}</p>
    </>
  );
};
