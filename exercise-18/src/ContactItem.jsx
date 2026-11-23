import { useContext} from "react";
import ContactContext from "./ContactContext";

export const ContactItem = ({ contact, handleData }) => {
  const { dispatch } = useContext(ContactContext);

  return (
    <div>
      <ul>
        <li>
          <h4> {contact.favorited ? `${contact.name} ⭐` : contact.name}</h4>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <button onClick={() => handleData(contact)}>Edit</button>
          <button
            onClick={() => dispatch({ type: "TOGGLE", payload: contact.id })}
          >
            Favorite
          </button>
          <button
            onClick={() => dispatch({ type: "DELETE", payload: contact.id })}
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};
