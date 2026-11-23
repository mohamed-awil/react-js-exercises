import { ContactForm } from "./ContactForm";
import { reducer, initialValue } from "./reducer";
import { useReducer } from "react";
import ContactContext from "./ContactContext";

export const ContactApp = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      <h1>Contact Management App</h1>
      <ContactForm />
    </ContactContext.Provider>
  );
};
