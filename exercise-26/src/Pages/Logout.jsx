import { useContext } from "react";
import { AuthContext } from "../BlogContext";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const { logout } = useContext(AuthContext);
const  navigate = useNavigate()
  const handleLogOut = () => {
    logout();
    navigate("/login")
  };
  return (
     <div className="max-w-4xl bg-white shadow-md p-6 flex flex-col gap-2 mt-4 rounded-md">
      <button
      className=" bg-red-500 self-start py-1 px-2 text-white rounded-sm"
       onClick={handleLogOut}>Logout</button>
    </div>
  );
};
