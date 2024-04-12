import React from 'react';
import {Box, IconButton, Typography} from '@mui/material';
import {FiMoon} from 'react-icons/fi';

const PagesNavbar = () => {
  return (
    <Box
      sx={{
        gridArea: 'navbar',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        width: 'inherit',
        backgroundColor: 'hsl(0, 0, 100%)',
        padding: '0 70px',
        height: '70px',
        boxShadow: '1px 1px 5px hsl(0, 0%, 89%)',
      }}
    >
      <Typography variant="h5" fontWeight={600}>
        Where in the World?
      </Typography>
      <Box
        sx={{
          width: 'fit-content',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          height: 'fit-content',
        }}
      >
        <IconButton aria-label="toggle mode">
          <FiMoon fontSize={18} color="black" />
        </IconButton>

        <Typography variant="body1">Dark Mode</Typography>
      </Box>
    </Box>
  );
};

export default PagesNavbar;
