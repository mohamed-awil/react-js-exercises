import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className=" flex justify-around py-3 bg-white shadow-md rounded-sm">
      <h1 className=" font-bold text-rose-600 text-3xl">Recipe Book</h1>
      <nav className="space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-rose-500 text-xl ${
              isActive ? "text-rose-600 font-medium" : "font-normal"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/recipes"
          className={({ isActive }) =>
            `hover:text-rose-500 text-xl ${
              isActive ? "text-rose-600 font-medium" : "font-normal"
            }`
          }
        >
          Recipes
        </NavLink>
        <NavLink
          to="/Categories"
          className={({ isActive }) =>
            `hover:text-rose-500 text-xl ${
              isActive ? "text-rose-600 font-medium" : "font-normal"
            }`
          }
        >
          Categories
        </NavLink>
      </nav>
    </header>
  );
};
