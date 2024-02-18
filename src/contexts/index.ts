import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
