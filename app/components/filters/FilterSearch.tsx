'use client';
import {TextField, useTheme} from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {useRouter, useSearchParams} from 'next/navigation';
import {queryParse, queryStringify} from 'configs/http';

const FilterSearch = () => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === 'dark';

  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const {search} = queryParse(params.toString()) || {};

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
      defaultValue={search || ''}
      onChange={(e) => {
        const search = e.target.value;
        const query = {
          search: search,
        };
        router.push('/' + '?' + queryStringify(query));
      }}
      InputProps={{
        disableUnderline: true,
        startAdornment: <SearchIcon fontSize="small" color="action" />,
      }}
    />
  );
};

export default FilterSearch;
