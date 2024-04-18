'use client';
import React from 'react';
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  useTheme,
} from '@mui/material';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'All'];

const SelectRegion = ({
  selectedRegion,
  setSelectedRegion,
}: {
  selectedRegion: string | null;
  setSelectedRegion: (region: string) => void;
}) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const handleChange = (event: SelectChangeEvent<typeof selectedRegion>) => {
    const {
      target: {value},
    } = event;

    setSelectedRegion(value as string);
  };

  return (
    <FormControl fullWidth>
      <Select
        displayEmpty
        id="select-region"
        value={selectedRegion || ''}
        sx={{
          width: '100%',
          borderRadius: '5px',
          border: 'none',
          '& .MuiSelect-select': {
            bgcolor: 'secondary.main',
          },
          '.MuiOutlinedInput-notchedOutline': {
            boxShadow: isDarkMode ? null : '1px 1px 5px hsl(0, 0%, 89%)',
            border: 0,
          },
          '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            border: 0,
          },
          '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
            {
              border: 0,
            },
        }}
        renderValue={(selected) => {
          if (selected?.length === 0) {
            return 'Filter By Region';
          }
          return selected;
        }}
        onChange={handleChange}
      >
        {regions.map((region, index) => {
          return (
            <MenuItem key={index} value={region}>
              {region}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectRegion;
