import {Box} from '@mui/material';

import dynamic from 'next/dynamic';

import React from 'react';

const ViewCountry = ({data}: {data: Country[]}) => {
  const {name, population, region, latlng, capital} = data[0];

  const Map = dynamic(() => import('modules/map/Map'), {
    loading: () => <p>Loading ...</p>,
  });

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

      <Map latlng={latlng} />
    </Box>
  );
};

export default ViewCountry;
