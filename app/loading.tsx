'use client';
import {Box, Typography, useTheme} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import React from 'react';

export default function Loading() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        background: theme.palette.background.default,
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.primary.main,
      }}
    >
      <Box sx={{width: '50%', textAlign: 'center'}}>
        <Typography variant="body1">Loading details...</Typography>
        <LinearProgress />
      </Box>
    </Box>
  );
}
