import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from "./pages/user/User";
import Products from "./pages/products/Products";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home />
      ),
    },
    {
      path: "user",
      element: <User />,
    },
    {
      path: "products",
      element: <Products />,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
