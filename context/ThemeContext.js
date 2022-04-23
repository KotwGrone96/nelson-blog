import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      return;
    }
    setTheme('light');
  };
  const data = {
    handleTheme,
    theme,
  };
  return (
    <ThemeContext.Provider value={{ data }}>{children}</ThemeContext.Provider>
  );
};
