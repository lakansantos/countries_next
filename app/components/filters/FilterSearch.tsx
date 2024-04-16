'use client';
import {TextField, useTheme} from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const FilterSearch = () => {
  const theme = useTheme();

  const darkMode = theme.palette.mode === 'dark';
  return (
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
  );
};

export default FilterSearch;
