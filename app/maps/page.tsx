import PagesContainer from 'components/pages/PagesContainer';
import PagesNavbar from 'components/pages/PagesNavbar';
import {isEmpty} from 'lodash';

import ViewCountry from 'modules/countries/view/ViewCountry';
import useGetCountry from 'modules/countries/view/useGetCountry';
import {notFound} from 'next/navigation';

import React from 'react';

export default async function Page({
  searchParams,
}: {
  searchParams: {code: string};
}) {
  const {code} = searchParams || {};

  const {data} = await useGetCountry(code);
  if (!data && !isEmpty(searchParams)) {
    return notFound();
  }
  return (
    <PagesContainer>
      <PagesNavbar />
      <ViewCountry data={data} />
    </PagesContainer>
  );
}
