import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home";
import Basics from "./pages/Basics";
import Tips from "./pages/Tips";
import Framework from "./pages/Framework";
import MainLayout from "./layout/MainLayout";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import ProtectedRouter from "./protected/ProtectedRouter";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ProtectedRouter>
          <Home />
        </ProtectedRouter>
      },
      {
        path: '/tips',
        element: <ProtectedRouter>
          <Tips />
        </ProtectedRouter>
      },
      {
        path: '/basics',
        element: <ProtectedRouter>
          <Basics />
        </ProtectedRouter>
      },
      {
        path: '/framework',
        element: <ProtectedRouter>
          <Framework />
        </ProtectedRouter>
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