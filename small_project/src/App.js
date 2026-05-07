import { RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { router } from "./router";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const {isDark} = useContext(ThemeContext);
  console.log(isDark)
  return (
    <div className = {`${isDark? "dark": "light"}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
