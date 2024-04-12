import {createTheme, ThemeProvider} from '@mui/material';
import React, {ReactNode} from 'react';

const theme = createTheme({
  typography: {
    fontFamily: 'nunato',
  },
});
const AppThemeProvider: React.FC<{children: ReactNode}> = ({children}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
