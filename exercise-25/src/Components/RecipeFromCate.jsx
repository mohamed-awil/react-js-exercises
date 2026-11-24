import { useParams, Link } from "react-router-dom";
import { recipes } from "../recipes";
export const RecipeFromCate = () => {
  const { categoryId } = useParams();
  const selectedRecipes = recipes.filter(
    (recipe) => recipe.category === categoryId,
  );
  return (
    <div className="p-4 bg-white w-2/3 rounded-md shadow-md">
      <div className="p-4">
        <h1 className="font-bold text-3xl py-4">{categoryId} Recipes</h1>
      </div>
      <div className="flex flex-col gap-2">
        {selectedRecipes.map((recipe) => (
          <Link
            to={`/recipes/${recipe.id}`}
            key={recipe.id}
            className="p-4 border-2 border-black rounded-md"
          >
            <h2 className="text-xl font-bold mb-1">{recipe.title}</h2>
            <p className="text-gray-900">{recipe.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
