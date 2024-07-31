import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const CustomCalendarHeaderRoot = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px 16px',
  alignItems: 'center',
  textTransform: 'uppercase'
});

function CustomCalendarHeader(props) {
  const { currentMonth, onMonthChange } = props;

  const selectNextMonth = () => onMonthChange(currentMonth.add(1, 'month'), 'left');

  const selectPreviousMonth = () => onMonthChange(currentMonth.subtract(1, 'month'), 'right');

  return (
    <CustomCalendarHeaderRoot>
      <Stack spacing={1} direction="row">
        <IconButton onClick={selectPreviousMonth} title="Previous month">
          <ChevronLeft />
        </IconButton>
      </Stack>
      <Typography variant="body2">{currentMonth.format('MMMM')}</Typography>
      <Stack spacing={1} direction="row">
        <IconButton onClick={selectNextMonth} title="Next month">
          <ChevronRight />
        </IconButton>
      </Stack>
    </CustomCalendarHeaderRoot>
  );
}


const CustomDatePicker = ({which}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={selectedDate}
        onChange={handleDateChange}

        slotProps={{
          textField: {
            placeholder: `Date ${which}`,
            sx: {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#eee',
                borderRadius: '8px',
              },
              '& .MuiOutlinedInput-input': {
                padding: '10px 0 10px 12px',
                outline: 'none',
              },
              '& ::placeholder': {
                color: 'black',
                opacity: 1, 
              },
            }
          }
        }}
        slots={{
          calendarHeader: CustomCalendarHeader,
          openPickerIcon: KeyboardArrowDownIcon,
        }}
        format="DD-MM-YYYY"
      />
    </LocalizationProvider>
  );
}

export default CustomDatePicker;