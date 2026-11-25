import { createContext, useState } from "react";

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState([]);
  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, setPosts, posts, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;
