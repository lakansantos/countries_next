import {Box} from '@mui/material';
import {COUNTRIES_API_URL} from 'app/configs/constants';
import React from 'react';

const Countries = async () => {
  const response = await fetch(COUNTRIES_API_URL);
  const data = response.json();
  console.log(data);
  return (
    <Box
      sx={{
        maxHeight: '650px',
        minHeight: '80%',
        overflowY: 'auto',
      }}
    >
      test
    </Box>
  );
};

export default Countries;
