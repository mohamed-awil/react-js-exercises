import { useEffect, useState } from "react";
export const FetchData = function () {
  const [inputValue, setInputValue] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUser() {
      if (username.trim() === "") return;
      setError("");
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${username}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    }

    fetchUser();
  }, [username]);

  function handleSearch(inputValue) {
    setUser(null);

    setUsername(inputValue);
  }

  return (
    <div>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Enter Github username"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => handleSearch(inputValue)}>Search</button> <br></br>
      {isloading && <h1>Loading..</h1>}
      {user ? (
        <>
          <img
            style={{ marginTop: "10px", borderRadius: "50px" }}
            src={user.avatar_url}
            alt="GitHub Profile"
            width="100"
            height="100"
            onError={() => console.log("sawirka lama rari karo")}
          />
          <h2>{user.name}</h2>
          <h6>Location: N/A</h6>
          <h6>Public Repos: {user.public_repos}</h6>
        </>
      ) : (
        <p style={{ color: "red" }}>{error}</p>
      )}
    </div>
  );
};
