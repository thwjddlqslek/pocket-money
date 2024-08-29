import { createContext, useState, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";

export const ThemeContext = createContext({
  isDarkMode: false,
  themeBttClicked: () => {},
});

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
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
