import { useForm } from "./UseForm";

function App() {
  const { values, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form data:", values);
  }
  return (
    <>
      <h1>Custom hook</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />{" "}
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />{" "}
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={values.password}
          name="password"
          onChange={handleChange}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
