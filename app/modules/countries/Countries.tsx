import React from 'react';

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {isEmpty} from 'lodash';

const Countries = ({data = []}: {data: Countries | null}) => {
  const isEmptyData = isEmpty(data);
  return (
    <Box
      sx={{
        display: 'grid',
        maxHeight: '650px',
        gridTemplateColumns: `repeat(auto-fill,${isEmptyData ? 'auto' : '300px'} )`,
        minHeight: {xs: '100vh', md: '80%'},
        height: 'fit-content',
        overflowY: 'auto',
        flexWrap: 'wrap',
        gridGap: '1rem',
        justifyContent: isEmptyData
          ? 'center'
          : {xs: 'center', sm: 'space-between'},
        alignItems: {xs: 'flex-start', sm: 'center'},
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
      }}
    >
      {!isEmptyData ? (
        data?.map((country, index) => {
          const {name, population, region, flags, capital} = country;
          const isCountryNameLong = name.common.length >= 20;
          return (
            <Card
              sx={{
                width: {xs: '100%', sm: 300},
                height: {xs: 400, sm: 300},
                bgcolor: 'secondary.main',
              }}
              key={index}
            >
              <CardMedia
                component="img"
                sx={{
                  height: {xs: '50%', sm: 150},
                  width: {xs: '100%', sm: 300},
                  objectFit: 'cover',
                }}
                image={flags.svg}
                title={name.common || 'Country Image'}
              />
              <CardContent
                sx={{
                  width: {xs: 325, sm: 230},
                  height: {xs: '50%', sm: 150},
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
                <Typography variant="body2">
                  Region: {region || 'N/A'}
                </Typography>
                <Typography variant="body2">
                  Capital:{' '}
                  {!!capital ? capital.filter((v) => v).join(', ') : 'N/A'}
                </Typography>
              </CardContent>
            </Card>
          );
        })
      ) : (
        <Typography
          variant="body1"
          component="span"
          display="flex"
          gap={1}
          justifyItems="center"
          alignItems="center"
        >
          <SearchIcon fontSize="small" color="action" /> No country found
        </Typography>
      )}
    </Box>
  );
};

export default Countries;
