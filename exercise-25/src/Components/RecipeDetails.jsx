import { Link, useParams } from "react-router-dom";
import { recipes } from "../recipes";

export const RecipeDetails = () => {
  const { recipeId } = useParams();
  const selectedRecipe = recipes.filter(
    (recipe) => recipe.id === Number(recipeId),
  );
  return (
    <div className="flex justify-center items-center p-6 ">
      <div className="bg-white min-w-128 p-4 shadow-md flex flex-col gap-2 w-2/3 rounded-md">
        <Link
          to="/recipes"
          className="text-rose-600 text-xl flex gap-2 items-center"
        >
          <i className="fa-solid fa-arrow-left-long"></i> Back to recipes
        </Link>
        <h2 className="font-bold text-2xl py-2">Sample Recipe</h2>

        <div className="grid md:grid-cols-2">
          <div>
            <h3 className="font-medium text-2xl py-2">Ingredients</h3>
            <ul className="flex flex-col justify-between">
              {selectedRecipe.map((recipe) =>
                recipe.ingredients.map((ingredient) => (
                  <li className="text-lg font-normal" key={ingredient}>
                    • {ingredient}
                  </li>
                )),
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-2xl py-2">Instructions</h3>
            <ul className="flex flex-col">
              {selectedRecipe.map((recipe) =>
                recipe.instructions.map((instruction) => (
                  <li className="text-lg font-normal" key={instruction}>
                    1. {instruction}
                  </li>
                )),
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
