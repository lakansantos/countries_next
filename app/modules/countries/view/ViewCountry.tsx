import {Box} from '@mui/material';

import dynamic from 'next/dynamic';

import React from 'react';

const ViewCountry = ({data}: {data: Country[]}) => {
  const {name, population, region, capitalInfo, capital} = data[0];

  const MapLazyLoading = dynamic(() => import('modules/map/Map'), {
    loading: () => <p>Loading ...</p>,
  });

  const {latlng} = capitalInfo;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100%',
        flexDirection: 'column',
      }}
    >
      {name.common}
      {population}
      {region}

      {capital}

      <MapLazyLoading latlng={latlng} />
    </Box>
  );
};

export default ViewCountry;
