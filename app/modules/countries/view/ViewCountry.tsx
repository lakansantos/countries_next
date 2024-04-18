import {Box} from '@mui/material';

import React from 'react';

const ViewCountry = ({data}: {data: Country[]}) => {
  const {name, population, region, capital} = data[0];
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100%',
      }}
    >
      {name.common}
      {population}
      {region}

      {capital}
    </Box>
  );
};

export default ViewCountry;
