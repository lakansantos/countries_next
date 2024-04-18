import PagesContainer from 'components/pages/PagesContainer';
import PagesContent from 'components/pages/PagesContent';
import PagesNavbar from 'components/pages/PagesNavbar';

import useGetCountries from './hooks/useGetCountries';

export default async function Home() {
  const {data} = await useGetCountries();

  return (
    <PagesContainer>
      <PagesNavbar />
      <PagesContent data={data} />
    </PagesContainer>
  );
}
