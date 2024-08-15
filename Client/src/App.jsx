import React, { Children } from "react";
import "./index.css";
import AppLayout from "./Pages/AppLayout";
import Todo from "./component/Todo";
import GetTodo from "./component/GetTodo";
import { RouterProvider,createBrowserRouter} from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";
const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Todo /> },
        {
          path: "/task",
          element: <GetTodo />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}/>;
};

export default App;
