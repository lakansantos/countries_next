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
import {useRouter} from 'next/navigation';

const Countries = ({
  data = [],
  selectedRegion,
}: {
  data: Countries | null;
  selectedRegion: string | null;
}) => {
  const _data =
    !!selectedRegion && selectedRegion !== 'All'
      ? data?.filter((country) => country.region === selectedRegion)
      : data;

  const isEmptyData = isEmpty(_data);

  const router = useRouter();
  return (
    <Box
      sx={{
        display: 'grid',
        maxHeight: '650px',
        gridTemplateColumns: `repeat(auto-fill,${isEmptyData ? 'auto' : '300px'} )`,
        minHeight: {xs: '200px', md: '80%'},
        height: 'fit-content',
        overflowY: 'auto',
        overflowX: 'hidden',
        flexWrap: 'wrap',
        gridGap: '1rem',
        justifyContent: isEmptyData
          ? 'center'
          : {xs: 'center', sm: 'space-between'},
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
      }}
    >
      {!isEmptyData ? (
        _data?.map((country, index) => {
          const {name, population, region, flags, cca2, capital} = country;
          const isCountryNameLong = name.common.length >= 20;

          return (
            <Card
              sx={{
                width: {xs: '100%', sm: 300},
                height: {xs: 400, sm: 400},
                bgcolor: 'secondary.main',
                ':hover': {
                  cursor: 'pointer',
                  transform: 'scale(1.03)',
                },
                transition: '0.3s',
              }}
              key={index}
              onClick={() => router.push('/' + cca2)}
            >
              <CardMedia
                component="img"
                sx={{
                  height: {xs: '50%'},
                  width: {xs: '100%'},
                  objectFit: 'fill',
                }}
                image={flags.png}
                title={name.common + 'flag' || 'Country Image Flag'}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  height: '50%',
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
          <SearchIcon fontSize="small" color="action" /> No results found
        </Typography>
      )}
    </Box>
  );
};

export default Countries;
