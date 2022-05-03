import { createContext, useState, useEffect } from 'react';
import { setStorageTheme, getStorageTheme } from '../hooks/useLocalStorage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setStorageTheme('dark');
      return;
    }
    setTheme('light');
    setStorageTheme('light');
  };

  useEffect(() => {
    const currentTheme = getStorageTheme();
    setTheme(currentTheme);
    return;
  }, []);

  const data = {
    handleTheme,
    theme,
  };
  return (
    <ThemeContext.Provider value={{ data }}>{children}</ThemeContext.Provider>
  );
};
