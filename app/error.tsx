'use client';
import {Box, Button, Typography} from '@mui/material';
import React from 'react';
import WarningIcon from '@mui/icons-material/Warning';
const error = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        background: '#333',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{width: '50%', textAlign: 'center', color: '#fff'}}>
        <WarningIcon
          sx={{
            color: '#fff',
            backgroundColor: 'none',
            fontSize: '80px',
          }}
        />
        <Typography variant="h5"> Oops! </Typography>
        <Typography variant="body1">
          The server is currently down. Please try again later.
        </Typography>
        <Button
          variant="contained"
          onClick={() => window.location.replace('/')}
          sx={{
            mt: 3,
            backgroundColor: '#fff',
            color: '#000',
            '&:hover': {
              background: '#fff',
            },
          }}
        >
          Try again
        </Button>
      </Box>
    </Box>
  );
};

export default error;
