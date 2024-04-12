'use client';
import PagesContainer from 'components/pages/PagesContainer';
import PagesContent from 'components/pages/PagesContent';
import PagesNavbar from 'components/pages/PagesNavbar';
import AppThemeProvider from 'components/themes/ThemeProvider';
import useThemeToggle from 'components/themes/useThemeModeToggle';

export default function Home() {
  const {darkMode, toggleMode} = useThemeToggle();
  return (
    <AppThemeProvider darkMode={darkMode}>
      <PagesContainer>
        <PagesNavbar toggleMode={toggleMode} darkMode={darkMode} />
        <PagesContent />
      </PagesContainer>
    </AppThemeProvider>
  );
}
