import { useState } from "react";
import { ThemeContext } from "./context";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
