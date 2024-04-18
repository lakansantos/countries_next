'use client';
import {Box, Typography} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import React from 'react';

export default function Loading() {
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
        <Typography variant="body1" color="#fff">
          Loading countries...
        </Typography>
        <LinearProgress />
      </Box>
    </Box>
  );
}
