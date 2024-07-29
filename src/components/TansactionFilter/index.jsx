import s from "./index.module.css"
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";

const TransactionFilter = () => {

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className={s.form}>
      <FormControl sx={{ width: 150 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <span>All currencies</span>
          </MenuItem>
          <MenuItem value={1}>BTC</MenuItem>
          <MenuItem value={2}>ETH</MenuItem>
          <MenuItem value={3}>USDT</MenuItem>
          <MenuItem value={4}>TUSD</MenuItem>
          <MenuItem value={5}>USDC</MenuItem>
          <MenuItem value={6}>TRX</MenuItem>
          <MenuItem value={7}>BNB</MenuItem>
          <MenuItem value={8}>XRP</MenuItem>
          <MenuItem value={9}>LTC</MenuItem>
        </Select>

      </FormControl>
      <FormControl sx={{ width: 150 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <span>All networks</span>
          </MenuItem>
          <MenuItem value={1}>TRC20</MenuItem>
          <MenuItem value={2}>ERC20</MenuItem>
          <MenuItem value={3}>BSC20</MenuItem>
        </Select>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker sx={{ width: 150 }}/>
        <DatePicker sx={{ width: 150 }} maxDate={dayjs('2022-04-17')} />
      </LocalizationProvider>
      <FormControl sx={{ width: 150 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <span>All statuses</span>
          </MenuItem>
          <MenuItem value={1}>TRC20</MenuItem>
          <MenuItem value={2}>ERC20</MenuItem>
          <MenuItem value={3}>BSC20</MenuItem>
        </Select>
      </FormControl>
      <div className={s.search}>
        <InputBase
          placeholder="Search..."
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </div>

    </div>
  );
}

export default TransactionFilter;