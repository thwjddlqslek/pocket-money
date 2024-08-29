import { useContext } from "react";
import * as h from "../styles/headerStyle";
import { ThemeContext } from "../context/ThemeContext";

export const ThemeButton = () => {
  const { isDarkMode, themeBttClicked } = useContext(ThemeContext);

  return (
    <h.ThemeButton onClick={themeBttClicked}>
      {isDarkMode ? "Light" : "Dark"}
    </h.ThemeButton>
  );
};

export default ThemeButton;
