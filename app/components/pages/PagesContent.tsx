'use client';

import {Box, Grid, Stack} from '@mui/material';
import React from 'react';

import SelectRegion from 'components/selects/SelectRegion';
import FilterSearch from 'components/filters/FilterSearch';
import Countries from 'modules/countries/Countries';

import useSearch from 'components/filters/useSearch';

const PagesContent = ({data}: {data: Countries}) => {
  const {searchedData, setSearchedData} = useSearch();

  return (
    <Box
      sx={{
        gridArea: 'content',
        height: '100%',
      }}
    >
      <Stack
        sx={{
          padding: {md: '50px', xs: '20px'},
          height: 'inherit',
        }}
        gap={5}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Grid item sm={12} md={6} xs={12} lg={4}>
            <FilterSearch data={data} setSearchedData={setSearchedData} />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={6}
            lg={2}
            justifyContent="center"
            alignItems="center"
          >
            <SelectRegion />
          </Grid>
        </Grid>
        <Countries data={searchedData || data} />
      </Stack>
    </Box>
  );
};

export default PagesContent;
