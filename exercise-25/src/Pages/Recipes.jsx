import { recipes } from "../recipes";
import { Link } from "react-router-dom";
export const Recipes = () => {
  return (
    <div className="p-6">
      <h1 className="font-bold text-3xl">All Recipes</h1>
      <div className="grid md:grid-cols-3 p-4 gap-6 ">
        {recipes.map((recipe) => (
          <Link
            to={`/recipes/${recipe.id}`}
            key={recipe.id}
            className="bg-white shadow-md flex flex-col gap-4 p-4 justify-between rounded-md"
          >
            <h2 className="font-bold text-2xl">{recipe.title}</h2>
            <p className="text-gray-600 font-normal text-xl">
              {recipe.description}
            </p>
            <span className="bg-rose-100 text-rose-900 max-w-26 text-center rounded-sm text-xl">
              {recipe.category}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
