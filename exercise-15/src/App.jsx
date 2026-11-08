import { useState } from "react";
import LanguageContext from "./LanguageContext";
import { DisplayLan } from "./DisplayLan";

function App() {
  const [word, setWord] = useState("Hello!");

  const lanSwitcher = () => {
    setWord((prev) => (prev === "Hello!" ? "¡Hola!" : "Hello!"))
  }
  return (

    <LanguageContext.Provider value={word}>
      <button onClick={lanSwitcher}> Switch to {word === "Hello!" ? "Spanish" : "English"  }


      </button>
      <DisplayLan/>
    </LanguageContext.Provider>
  )
}

export default App;
