import {
  createBrowserRouter,
  RouterProvider,
  // Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import Error from "./pages/notfound/Error";
import  Global from "./pages/global/Global";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/countries",
    element: <Global />
  },
  {
    path: "/single",
    element: <Single/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "*",
    element: <Error/>
  }
]);

function App() {
  return (
    <div className="app">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
 