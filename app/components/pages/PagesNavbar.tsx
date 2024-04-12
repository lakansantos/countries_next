import React from 'react';
import {Box, IconButton, Typography, useTheme} from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

type PagesNavbarProps = {
  darkMode: boolean;
  toggleMode: () => void;
};
const PagesNavbar = (props: PagesNavbarProps) => {
  const {darkMode, toggleMode} = props;

  const theme = useTheme();
  return (
    <Box
      sx={{
        gridArea: 'navbar',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        width: 'inherit',
        backgroundColor: theme.palette.secondary.main,
        padding: '0 70px',
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
            <DarkModeOutlinedIcon
              sx={{
                fontSize: 20,
                color: theme.palette.primary.main,
              }}
            />
          ) : (
            <WbSunnyOutlinedIcon
              sx={{
                fontSize: 20,
                color: theme.palette.primary.main,
              }}
            />
          )}
        </IconButton>

        <Typography variant="body1">Dark Mode</Typography>
      </Box>
    </Box>
  );
};

export default PagesNavbar;
