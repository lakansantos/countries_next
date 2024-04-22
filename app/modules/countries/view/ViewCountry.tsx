import {Box} from '@mui/material';

import dynamic from 'next/dynamic';

import React from 'react';

const ViewCountry = ({data}: {data: Country[]}) => {
  const Map = dynamic(() => import('modules/map/Map'), {
    loading: () => <p>Loading ...</p>,
  });

  return (
    <Box
      sx={{
        display: 'flex',
        gridArea: 'content',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100%',
        flexDirection: 'column',
      }}
    >
      <Map data={data[0]} />
    </Box>
  );
};

export default ViewCountry;
