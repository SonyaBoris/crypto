import { styled } from '@mui/system';
import { FormControl, Select, MenuItem, InputBase } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Custom = styled(Select)(({ theme }) => ({
  '& .MuiSelect-select': {
    borderRadius: '8px',
    padding: '10px 26px 10px 12px',
    border: '1px solid #eee',
    color: '#616161',
  },
  '& .MuiSelect-icon': {
    right: '4px',
  },
}));

const CustomMenuItem = styled(MenuItem)(({ theme, selected }) => ({
  background: selected ? 'linear-gradient(270deg, rgba(3, 201, 136, 0.2) 0%, rgba(23, 156, 247, 0.2) 100%)' : 'transparent',
  borderRadius: '60px',
}));


const CustomSelect = ({ title, name, handleChangeStatuses, data }) => {

  return (
    <FormControl sx={{ width: 150 }}>
      <Custom
        value={name}
        onChange={handleChangeStatuses}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        IconComponent={KeyboardArrowDownIcon}
        input={<InputBase />}
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: '16px',
              paddingX: '8px',
            },
          },
        }}
      >
        <CustomMenuItem value="">
          <span>All {title}</span>
        </CustomMenuItem>
        {data.map(item =>
          <CustomMenuItem key={item.id} value={item.id}>{item.name}</CustomMenuItem>
        )}
      </Custom>
    </FormControl>
  );
}

export default CustomSelect;