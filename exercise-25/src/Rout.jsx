import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./Pages/Home";
import { Recipes } from "./Pages/Recipes";
import { Categories } from "./Pages/Categories";
import { RecipeDetails } from "./Components/RecipeDetails";
import {RecipeFromCate} from "./Components/RecipeFromCate";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {
                index: true,
                element: <Home/>
            },

            {
                path: "recipes",
                element: <Recipes/>
            },
            {
                path: "categories", 
                element: <Categories/>,
                children: [
                    {
                        path: "/categories/:categoryId",
                        element: <RecipeFromCate/>
                    }
                ]


            },

            {
                path: "recipes/:recipeId",
                element: <RecipeDetails/>
                
            }
        ]
    }

])

export default router;