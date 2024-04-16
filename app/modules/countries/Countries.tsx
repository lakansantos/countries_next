import {Box} from '@mui/material';
import {COUNTRIES_API_URL} from 'app/configs/constants';
import React from 'react';

type Countries = {
  name: {
    common: string;
  };
}[];
const Countries = async () => {
  const response = await fetch(COUNTRIES_API_URL);
  const data: Countries = await response.json();

  return (
    <Box
      sx={{
        maxHeight: '650px',
        minHeight: '80%',
        overflowY: 'auto',
      }}
    >
      {data.map((country, index) => {
        return <p key={index}>{country.name.common}</p>;
      })}
    </Box>
  );
};

export default Countries;
