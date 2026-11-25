import { useContext } from "react";
import { AuthContext } from "../BlogContext";
import { Navigate } from "react-router-dom";

export const ProtactedRoutes = ({ element }) => {
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return element;
};
