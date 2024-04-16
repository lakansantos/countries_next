'use client';
import React from 'react';
import {Box, IconButton, Typography} from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import {useThemeToggle} from 'app/hooks/useThemeModeToggle';

const PagesNavbar = () => {
  const {darkMode, toggleMode} = useThemeToggle();

  return (
    <Box
      sx={{
        gridArea: 'navbar',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        width: 'inherit',
        backgroundColor: 'secondary.main',
        padding: {md: '0 70px', xs: '0 20px'},
        height: '70px',
        boxShadow: darkMode ? null : '1px 1px 5px hsl(0, 0%, 89%)',
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
        <IconButton aria-label="toggle mode" onClick={() => toggleMode()}>
          {darkMode ? (
            <WbSunnyOutlinedIcon
              sx={{
                fontSize: 20,
                color: 'primary.main',
              }}
            />
          ) : (
            <DarkModeOutlinedIcon
              sx={{
                fontSize: 20,
                color: 'primary.main',
              }}
            />
          )}
        </IconButton>

        <Typography variant="body1">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Typography>
      </Box>
    </Box>
  );
};

export default PagesNavbar;
