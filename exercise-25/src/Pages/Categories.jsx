import { categories } from "../recipes";
import { Link, Outlet } from "react-router-dom";
export const Categories = () => {
  return (
    <div className="p-6 flex flex-col gap-6 justify-center items-center">
      <div className="p-4 bg-white w-2/3 rounded-md">
        <h1 className="font-bold text-3xl py-4">Categories</h1>
        <div className="flex flex-col">
          {categories.map((category) => (
            <Link
              to={`/categories/${category.id}`}
              key={category.id}
              className="hover:bg-rose-100 p-2 capitalize"
            >
              <h3 className="font-medium text-xl hover:text-rose-600">
                {category.id}
              </h3>
              <p className="text-gray-900">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>

      <Outlet />
    </div>
  );
};
