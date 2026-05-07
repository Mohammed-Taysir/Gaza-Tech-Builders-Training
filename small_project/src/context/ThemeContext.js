import { createContext, useReducer, useState } from "react";


export const ThemeContext = createContext(null);



export default function ThemeContextProvider({children}) {
  const theme = localStorage.getItem("theme") ?? "light";
  const [isDark, setIsDark] = useState(theme === "dark"? true: false);
  
  return (
    <ThemeContext.Provider value = {{isDark,setIsDark}}>
      {children}
    </ThemeContext.Provider>
  );
}

