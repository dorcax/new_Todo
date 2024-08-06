import React, { Children } from "react";
import "./index.css";
import AppLayout from "./Pages/AppLayout";
import Todo from "./component/Todo";
import GetTodo from "./component/GetTodo";
import { RouterProvider,createBrowserRouter} from "react-router-dom";
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
      ],
    },
  ]);
  return <RouterProvider router={router}/>;
};

export default App;
