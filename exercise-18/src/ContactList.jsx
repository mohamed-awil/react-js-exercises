import { ContactItem } from "./ContactItem";
import ContactContext from "./ContactContext";
import { useContext } from "react";

export const ContactList = ({ handleData }) => {
  const { state } = useContext(ContactContext);
  return (
    <div>
      <h3>Contacts</h3>
      {/* {state.map((contact) => (
        <ContactItem key={contact.id} contact={contact} handleData= {handleData} />
      ))} */}

      {state.length > 0 ? (
        state.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            handleData={handleData}
          />
        ))
      ) : (
        <p>No contacts available.</p>
      )}
    </div>
  );
};
