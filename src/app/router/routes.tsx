import { createBrowserRouter } from "react-router";

import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { Register } from "@/pages/Register";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { NewTodo } from "@/pages/NewTodo";
import { EditTodo } from "@/pages/EditTodo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/new-todo",
        element: <NewTodo />,
      },
      {
        path: "/edit-todo/:id",
        element: <EditTodo />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <div>NotFound</div>,
  },
]);
