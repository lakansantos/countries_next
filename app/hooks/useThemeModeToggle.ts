import {ThemeToggleContext} from 'app/ThemeProvider';
import {useContext} from 'react';

export const useThemeToggle = () => useContext(ThemeToggleContext);
