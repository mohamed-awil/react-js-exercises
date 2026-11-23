import { useState } from "react";

export const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    language: "",
    terms: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
   alert(`User form\n${JSON.stringify(userData, null, 2)}`)
  }
  return (
    <div>
      <h1>User form</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />{" "}
        <br />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <br />
        <label>Language:</label>
        <select
          name="language"
          value={userData.language}
          onChange={handleChange}
        >
          <option value="">Select language</option>
          <option value="english">English</option>
          <option value="somali">Somali</option>
        </select>
        <br />
        <label>I agree terms</label>
        <input
          type="checkbox"
          name="terms"
          value={userData.terms}
          checked={userData.terms}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
