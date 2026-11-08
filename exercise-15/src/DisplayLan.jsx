import { useContext } from "react";
import LanguageContext from "./LanguageContext";

export const DisplayLan = () => {
  const word = useContext(LanguageContext);
  return (
    <div>
      <h1>{word}</h1>
    </div>
  );
};
