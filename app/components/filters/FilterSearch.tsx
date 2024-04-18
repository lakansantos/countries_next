import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {TextField, useTheme} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {useRouter, useSearchParams} from 'next/navigation';
import {queryParse, queryStringify} from 'configs/http';
import {debounce} from 'lodash';

const FilterSearch = () => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === 'dark';

  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const query = queryParse(params.toString()) || {};

  const {search} = query;

  const [searchedValue, setSearchedValue] = useState(search || '');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedPush = useCallback(
    debounce((search) => {
      const _query = {search: search};

      router.push('/' + '?' + queryStringify(_query));
    }, 300),

    [router]
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const search = e.target.value;

    setSearchedValue(search);
    debouncedPush(search);
  };

  useEffect(() => {
    setSearchedValue(search as string);
  }, [search]);

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
      value={searchedValue || ''}
      onChange={(e) => handleChange(e)}
      InputProps={{
        disableUnderline: true,
        startAdornment: <SearchIcon fontSize="small" color="action" />,
      }}
    />
  );
};

export default FilterSearch;
