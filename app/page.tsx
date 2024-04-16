import PagesContainer from 'components/pages/PagesContainer';
import PagesContent from 'components/pages/PagesContent';
import PagesNavbar from 'components/pages/PagesNavbar';

export default function Home() {
  return (
    <PagesContainer>
      <PagesNavbar />
      <PagesContent />
    </PagesContainer>
  );
}
