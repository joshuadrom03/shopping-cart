import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Navigation";
import HomePage from "../HomePage/HomePage";
import Shopping from "../Shopping/Shopping";
import Cart from "../Cart/Cart";
import ErrorPage from "../ErrorPage";
import Header from "../Header/Header";


// Layout component to keep Navbar fixed
const Layout = () => (
  <>
  <Header />
    <Navbar />
    <Outlet /> {/* Renders the matched route */}
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage/>, // Wrap everything inside Layout
    children: [
      { path: "/", element: <HomePage /> },
      { path: "shopping", element: <Shopping /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
