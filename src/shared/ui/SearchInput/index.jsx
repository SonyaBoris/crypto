import React from 'react';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Input = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 0 0 12px',
  border: '1px solid #eee',
  borderRadius: '8px',
  flex: '2'
}));

const SearchInput = () => {
  return (
    <Input>
      <InputBase  sx={{ width: '100%' }} />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Input>
  );
}

export default SearchInput;