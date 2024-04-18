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
      <Box sx={{width: '50%', textAlign: 'center'}}>
        <WarningIcon
          sx={{
            color: 'primary.main',
            backgroundColor: 'none',
            fontSize: '80px',
          }}
        />
        <Typography variant="h5" color="primary.main">
          {' '}
          Oops!{' '}
        </Typography>
        <Typography variant="body1" color="primary.main">
          The server is currently down. Please try again later.
        </Typography>
        <Button
          variant="contained"
          onClick={() => window.location.replace('/')}
          sx={{
            mt: 3,
          }}
        >
          Try again
        </Button>
      </Box>
    </Box>
  );
};

export default error;
