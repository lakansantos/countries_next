import PagesContainer from 'components/pages/PagesContainer';
import PagesContent from 'components/pages/PagesContent';
import PagesNavbar from 'components/pages/PagesNavbar';
import {COUNTRIES_API_URL} from 'app/configs/constants';

export default async function Home({
  searchParams,
}: {
  searchParams: {
    region: string;
    search: string;
  };
}) {
  const {region, search} = searchParams || {};

  const url = !!region
    ? COUNTRIES_API_URL.replace('all', `region/${region}`)
    : !!search
      ? COUNTRIES_API_URL.replace('all', `name/${search}`)
      : COUNTRIES_API_URL;

  const response = await fetch(url);
  const data: Countries = response.ok ? await response.json() : [];

  return (
    <PagesContainer>
      <PagesNavbar />
      <PagesContent data={data} />
    </PagesContainer>
  );
}
