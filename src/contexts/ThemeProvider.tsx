import { createContext, useState } from "react";

type theme = "light" | "dark";

interface IThemeContext {
  theme: theme;
  setTheme: React.Dispatch<React.SetStateAction<theme>>;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  setTheme: () => {
    return;
  },
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
