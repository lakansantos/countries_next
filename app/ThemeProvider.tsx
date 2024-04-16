'use client';
import {createTheme, ThemeProvider} from '@mui/material';
import React, {ReactNode, useEffect, useState} from 'react';

type ThemeWithProps = {
  children: ReactNode;
};

export const ThemeToggleContext = React.createContext({
  toggleMode: () => {},
  darkMode: false,
});

const AppThemeProvider: React.FC<ThemeWithProps> = ({children}) => {
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

  const theme = createTheme({
    typography: {
      fontFamily: 'nunato',
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1536,
      },
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)',
      },
      primary: {
        main: darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
      },
      secondary: {
        main: darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
      },
    },
  });
  return (
    <ThemeToggleContext.Provider
      value={{
        toggleMode: toggleMode,
        darkMode: darkMode,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default AppThemeProvider;
