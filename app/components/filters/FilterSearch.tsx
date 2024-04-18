'use client';
import React, {ChangeEvent, useState} from 'react';
import {TextField, useTheme} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const FilterSearch = ({
  data,
  setSearchedData,
}: {
  data: Countries;
  setSearchedData: (data: Countries | null) => void;
}) => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === 'dark';

  const [inputValue, setInputValue] = useState('');
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.currentTarget.value);
    const filteredCountries = data
      ? Object.values(data)?.filter((item) =>
          item.name.common
            .toUpperCase()
            .includes(e.currentTarget.value.toUpperCase().trim())
        )
      : [];

    if (e.currentTarget.value.trim() === '') {
      setSearchedData(null);
    } else {
      setSearchedData(filteredCountries);
    }
  };

  return (
    <TextField
      id="search"
      placeholder="Search for a country..."
      variant="standard"
      value={inputValue || ''}
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
      onChange={(e) => handleChange(e)}
      InputProps={{
        disableUnderline: true,
        startAdornment: <SearchIcon fontSize="small" color="action" />,
      }}
    />
  );
};

export default FilterSearch;
