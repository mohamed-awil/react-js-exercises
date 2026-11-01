import { useState } from "react";

export const LoginForm = () => {
  const [inputOneValue, setInputOneValue] = useState("");
  const [inputTwoValue, setInputTwoValue] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  function handleSubmit() {
    if (inputOneValue.trim() === "" || inputTwoValue.trim() === "") {
      return;
    }
    setIsLogin(false);
  };

  function reset() {
    setInputOneValue("");
    setInputTwoValue("");
    setIsLogin(true);
  };

  return (
    <>
      {isLogin ? (
        <div>
          <h1>Login</h1>
          <form action="" onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
              type="text"
              required
              onChange={(e) => setInputOneValue(e.target.value)}
            />{" "}
            <br />
            <label>Password:</label>
            <input
              type="password"
              required
              onChange={(e) => setInputTwoValue(e.target.value)}
            />{" "}
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Welcome, {inputOneValue}!</h2>
          <button onClick={reset}>Logout</button>
        </div>
      )}
    </>
  );
};
