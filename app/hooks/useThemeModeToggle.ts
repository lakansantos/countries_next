import {useEffect, useState} from 'react';

const useThemeToggle = () => {
  const isBrowser = typeof window !== 'undefined';

  const [darkMode, setDarkMode] = useState(false);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (isBrowser) {
      setDarkMode(localStorage.getItem('darkMode') === 'dark');
    }
  }, [isBrowser]);
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('darkMode', darkMode ? 'dark' : 'light');
    } else {
      return;
    }
  }, [darkMode, isMounted]);
  return {
    darkMode,
    setDarkMode,
    toggleMode,
  };
};

export default useThemeToggle;
