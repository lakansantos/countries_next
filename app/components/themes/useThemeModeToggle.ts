import {useEffect, useState} from 'react';

const useThemeToggle = () => {
  const storedMode = localStorage.getItem('darkMode') === 'dark';
  const [darkMode, setDarkMode] = useState(storedMode || false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode ? 'dark' : 'light');
  }, [darkMode]);
  return {
    darkMode,
    setDarkMode,
    toggleMode,
  };
};

export default useThemeToggle;
