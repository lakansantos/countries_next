'use client';
import {Box, Button, Typography} from '@mui/material';
import React from 'react';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import {useRouter} from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

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
      <Box
        sx={{
          width: '50%',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <SearchOffIcon
          sx={{
            color: '#fff',
            backgroundColor: 'none',
            fontSize: '80px',
          }}
        />
        <Typography variant="h3"> 404 Country Not Found! </Typography>
        <Typography variant="body1">
          Looks like we&apos;re off the grid here.
        </Typography>
        <Typography variant="body1">
          Double-check your coordinates and try again.
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            router.push('/');
          }}
          sx={{
            mt: 3,
            backgroundColor: '#fff',
            color: '#000',
            '&:hover': {
              background: '#rgb(236, 240, 241)',
            },
          }}
        >
          Go Back
        </Button>
      </Box>
    </Box>
  );
}
