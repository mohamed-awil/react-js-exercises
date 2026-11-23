import { useState, useContext } from "react";
import ContactContext from "./ContactContext";
import { ContactList } from "./ContactList";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState(null);

  const { dispatch } = useContext(ContactContext);
  const { state } = useContext(ContactContext);

  function handleAdd() {
    if (name.trim() === "" || email.trim() === "" || phone.trim() === "") {
      return;
    }
    const newContact = {
      id: Date.now(),
      name,
      email,
      phone,
      favorited: false,
    };

    dispatch({ type: "ADD", payload: newContact });
    setName("");
    setEmail("");
    setPhone("");
  }

  function handleData(data) {
    setUser(data);
  }

  function handleUpdate() {
    if (
      user.name.trim() === "" ||
      user.email.trim() === "" ||
      user.phone.trim() === ""
    ) {
      return;
    }
    dispatch({ type: "EDIT", payload: user });
    return setUser(null);
  }

  return (
    <>
      {user && state.length >= 1 ? (
        <div>
          <h2>Edit Contact</h2>
          <label>Name:</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <br />
          <label>Phone:</label>
          <input
            type="text"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
          <br />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setUser(null)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2>Add New Contact</h2>
          <label>Name:</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />{" "}
          <br />
          <label>Email:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />
          <label>Phone:</label>
          <input
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <br />
          <button onClick={handleAdd}>Add</button>
        </div>
      )}

      <ContactList handleData={handleData} />
    </>
  );
};
