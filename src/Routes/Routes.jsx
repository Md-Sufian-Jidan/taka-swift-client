import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Shared/Login";
import Register from "../Shared/Register";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
            path: '/',
            element: <Login />
        }
      ]
    },
    {
      path: '/register',
      element: <Register />
    }
  ]);


  export default router;