import PagesContainer from 'components/pages/PagesContainer';
import PagesNavbar from 'components/pages/PagesNavbar';
import ViewCountry from 'modules/countries/view/ViewCountry';
import useGetCountry from 'modules/countries/view/useGetCountry';
import React from 'react';

export default async function Page({params}: {params: {code: string}}) {
  const {code} = params;
  const {data} = await useGetCountry(code);

  return (
    <PagesContainer>
      <PagesNavbar />
      <ViewCountry data={data} />
    </PagesContainer>
  );
}
