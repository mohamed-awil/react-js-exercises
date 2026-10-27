import { useState, useEffect } from "react";

export const ChangeDocumentTitle = () => {
  const [name, setName] = useState("");
  const [greet, setGreet] = useState("Hello");

  useEffect(() => {
    name.trim() === ""
      ? (document.title = "Welcome!")
      : (document.title = `${greet}, ${name}`);
  }, [name]);

  return (
    <>
      <h2>Enter Your Name:</h2>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h2>Choose a Greeting:</h2>
      <input
        type="text"
        value={greet}
        onChange={(e) => setGreet(e.target.value)}
      />
    </>
  );
};
