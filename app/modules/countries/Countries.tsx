import React from 'react';

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from '@mui/material';
import {COUNTRIES_API_URL} from 'app/configs/constants';

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
        const {name, population, region, flags, capital} = country;
        const isCountryNameLong = name.common.length >= 20;
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
              image={flags.svg}
              title="test"
            />
            <CardContent
              sx={{
                width: {xs: 325, sm: 230},
                height: {xs: 250, sm: 150},
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
              }}
            >
              <Tooltip
                title={isCountryNameLong ? name.common : ''}
                placement="top"
                arrow
                slotProps={{
                  tooltip: {
                    sx: {
                      bgcolor: '#000',
                      '& .MuiTooltip-arrow': {
                        color: '#000',
                      },
                    },
                  },
                }}
              >
                <Typography
                  variant="h6"
                  noWrap={isCountryNameLong}
                  sx={{mb: 1, fontSize: {xs: 18}}}
                  fontWeight={700}
                >
                  {name.common}
                </Typography>
              </Tooltip>
              <Typography variant="body2">
                Population: {population.toLocaleString()}
              </Typography>
              <Typography variant="body2">Region: {region || 'N/A'}</Typography>
              <Typography variant="body2">
                Capital:{' '}
                {!!capital ? capital.filter((v) => v).join(', ') : 'N/A'}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

export default Countries;
