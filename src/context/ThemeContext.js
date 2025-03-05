import React, { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const lightTheme = {
  mode: "light",
  footerBackground: "#ffffff",
  footerText: "#333333",
  buttonBackground: "#000000",
  buttonText: "#ffffff",
};

const darkTheme = {
  mode: "dark",
  footerBackground: "#333333",
  footerText: "#ffffff",
  buttonBackground: "#ffffff",
  buttonText: "#000000",
};

// Create Context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme.mode === "light" ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
