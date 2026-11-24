import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col mb-4">
          <h1 className="text-center text-4xl font-bold py-4">
            Welcome to Recipe Book
          </h1>
          <p className="text-center text-xl text-gray-800">
            Discover delicious recipes and start cooking today!
          </p>
        </div>

        <div className=" text-center flex justify-center gap-4">
          <Link to="/recipes">
            <div className="p-6 bg-rose-600 hover:bg-rose-700 text-center rounded-sm h-32">
              <h1 className="font-bold text-2xl text-white pb-1">
                Browse Recipes
              </h1>
              <p className="text-white">
                Explore our collection of delicious <br /> recipes
              </p>
            </div>
          </Link>
          <Link to="/categories">
            <div className="p-6 bg-rose-600 hover:bg-rose-700 text-center rounded-sm h-32">
              <h1 className="font-bold text-2xl text-white pb-1">
                Recipes Categories
              </h1>
              <p className="text-white">Find recipes by category</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
