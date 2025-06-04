import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("Light"); 

  useEffect(() => {
    const savedTheme = localStorage.getItem("adminSettings");
    if (savedTheme) {
      const parsed = JSON.parse(savedTheme);
      if (parsed.theme) {
        setTheme(parsed.theme);
      }
    }
  }, []);

  useEffect(() => {
    document.body.dataset.theme = theme; 
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
