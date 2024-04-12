'use client';
import {createTheme, ThemeProvider} from '@mui/material';
import React, {ReactNode} from 'react';

type ThemeWithProps = {
  children: ReactNode;
  darkMode: boolean;
};
const AppThemeProvider: React.FC<ThemeWithProps> = ({children, darkMode}) => {
  const theme = createTheme({
    typography: {
      fontFamily: 'nunato',
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
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
