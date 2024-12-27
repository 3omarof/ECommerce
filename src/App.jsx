import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import LayOut from "./components/LayOut/LayOut";
import { Toaster } from "react-hot-toast";
import NotFound from "./Pages/NotFound/NotFound";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import UserProvider from "./Context/user.context";
import CartProvider from "./Context/Cart.context";
import Cart from "./Pages/Cart/Cart";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <LayOut />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "/category/:id", element: <h2>category</h2> },
        { path: "*", element: <NotFound /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
    {
      path: "/auth",
      element: <LayOut />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
      ],
    },
  ]);

  return (
    <>
      <UserProvider>
        <CartProvider>
          <RouterProvider router={router} />
          <Toaster />
        </CartProvider>
      </UserProvider>
    </>
  );
}
