import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";
import Layout from "./components/Layout";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AuthProvider from "./providers/AuthProvider";
import Users from "./components/Users";
import PrivateRoute from "./components/PrivateRoute";
import UpdateUser from "./components/UpdateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://coffee-store-node-crud-server.onrender.com/coffee"),
      },
      {
        path: "addCoffee",
        element: <PrivateRoute><AddCoffee></AddCoffee></PrivateRoute>,
      },
      {
        path: "updateCoffee/:id",
        element: <PrivateRoute> <UpdateCoffee></UpdateCoffee> </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://coffee-store-node-crud-server.onrender.com/coffee/${params.id}`),
      },
      {
        path: "signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path:"users",
        element:<PrivateRoute> <Users></Users></PrivateRoute>,
        loader:()=> fetch('https://coffee-store-node-crud-server.onrender.com/users')
      },
      {
        path:"/users/updateUser/:id",
        element:<UpdateUser></UpdateUser>,
        loader:({params})=> fetch(`https://coffee-store-node-crud-server.onrender.com/users/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
