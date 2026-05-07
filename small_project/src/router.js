import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home";
import Basics from "./pages/Basics";
import Tips from "./pages/Tips";
import Framework from "./pages/Framework";
import MainLayout from "./layout/MainLayout";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/tips',
        element: <Tips />
      },
      {
        path: '/basics',
        element: <Basics />
      },
      {
        path: '/framework',
        element: <Framework />
      },
      {
        path: '/signin',
        element: <SignIn />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  }
]);