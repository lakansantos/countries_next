import {Box, Card, CardContent, CardMedia, Typography} from '@mui/material';
import {COUNTRIES_API_URL} from 'app/configs/constants';
import React from 'react';

type Countries = {
  name: {
    common: string;
  };
  flags: {
    svg: string;
    png: string;
  };
  region: string;
  capital: string[];
  population: number;
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
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: 3,
        '&::-webkit-scrollbar': {
          width: '6px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'secondary.main',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#888',
          borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '#555',
        },
        width: '100%',
        height: '100vh',
      }}
    >
      {data.map((country, index) => {
        const {name, population, capital} = country;

        return (
          <Card
            sx={{
              width: {xs: '100%', sm: 230},
              height: {xs: 500, sm: 300},
              bgcolor: 'secondary.main',
            }}
            key={index}
          >
            <CardMedia
              sx={{
                height: {xs: 250, sm: 150},
                width: {xs: '100%', sm: 230},
                objectFit: 'contain',
              }}
              image={country.flags.svg}
              title="test"
            />
            <CardContent>
              <Typography variant="h6" sx={{mb: 1}} fontWeight={700}>
                {name.common}
              </Typography>
              <Typography variant="body2">
                Population:
                {population.toLocaleString()}
              </Typography>
              <Typography variant="body2">Region: {country.region}</Typography>
              <Typography variant="body2">
                Capital: {!!capital && capital.filter((v) => v).join(', ')}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

export default Countries;
