import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../BlogContext";

export const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <header className="p-4 rounded-md flex flex-col gap-4 border-b-1 border-gray-500">
      <h1 className="font-medium text-xl">Blog</h1>
      <nav className="flex space-x-4">
        {!isAuthenticated ? (
          <>
            <NavLink
              to=""
              className={({ isActive }) =>
                `${isActive ? "bg-sky-500 text-white" : undefined}  text-xl px-2 py-1 rounded-lg`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${isActive ? "bg-sky-500 text-white" : undefined}  text-xl px-2 py-1 rounded-lg`
              }
            >
              Login
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to=""
              className={({ isActive }) =>
                `${isActive ? "bg-sky-500 text-white" : undefined}  text-xl px-2 py-1 rounded-lg`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/create"
              className={({ isActive }) =>
                `${isActive ? "bg-sky-500 text-white" : undefined}  text-xl px-2 py-1 rounded-lg`
              }
            >
              Create Post
            </NavLink>

            <NavLink
              to="/logout"
              className="text-xl text-white px-2 py-1 rounded-lg bg-red-500"
            >
              Logout
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};
