import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { CreatePost } from "./Pages/CreatePost";
import { Post } from "./Components/Post";
import { Logout } from "./Pages/Logout";
import { ProtactedRoutes } from "./Components/ProtactedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: ":courseId",
        element: <Post />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "create",
        element:(
           < ProtactedRoutes element={<CreatePost/>}/>
        ) 
      },
      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
]);

export default router;
