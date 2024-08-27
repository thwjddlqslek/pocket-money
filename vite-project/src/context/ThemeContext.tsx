import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";

export const ThemeContext = createContext({
  isDarkMode: false,
  themeBttClicked: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const themeBttClicked = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };
  console.log(children);

  return (
    <ThemeContext.Provider value={{ isDarkMode, themeBttClicked }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
