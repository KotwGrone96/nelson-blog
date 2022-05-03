import { useEffect } from 'react';

export default function useLocalStorage() {
  useEffect(() => {
    const theme = window.localStorage.getItem('theme');
    if (theme === undefined || theme === null) {
      window.localStorage.setItem('theme', 'light');
      return;
    }
    return;
  }, []);
}

export const setStorageTheme = theme => {
  window.localStorage.setItem('theme', theme);
};

export const getStorageTheme = () => {
  const currentTheme = window.localStorage.getItem('theme');
  return currentTheme;
};
