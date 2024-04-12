'use client';
import PagesContainer from 'components/pages/PagesContainer';
import PagesNavbar from 'components/pages/PagesNavbar';
import ThemeProvider from 'components/themes/ThemeProvider';

export default function Home() {
  return (
    <ThemeProvider>
      <PagesContainer>
        <PagesNavbar />
      </PagesContainer>
    </ThemeProvider>
  );
}
