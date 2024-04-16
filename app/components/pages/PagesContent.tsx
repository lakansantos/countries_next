import {Box, Grid, Stack, TextField, useTheme} from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import SelectRegion from 'components/selects/SelectRegion';

const PagesContent = () => {
  const theme = useTheme();

  const darkMode = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        gridArea: 'content',
        height: '100%',
      }}
    >
      <Stack
        sx={{
          padding: {md: '70px', xs: '20px'},
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
            <TextField
              id="search"
              placeholder="Search for a country..."
              variant="standard"
              sx={{
                bgcolor: 'secondary.main',
                width: '100%',
                padding: '12px 30px',
                borderRadius: '5px',
                boxShadow: darkMode ? null : '1px 1px 5px hsl(0, 0%, 89%)',
                '& .MuiInputBase-input': {
                  textIndent: '15px',
                },
              }}
              InputProps={{
                disableUnderline: true,
                startAdornment: <SearchIcon fontSize="small" color="action" />,
              }}
            />
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
        <Stack>2</Stack>
      </Stack>
    </Box>
  );
};

export default PagesContent;
