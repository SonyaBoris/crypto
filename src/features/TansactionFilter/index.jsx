import s from "./index.module.css"
import { useState } from "react";
import CustomDatePicker from "../../shared/ui/CustomDatePicker";
import SearchInput from "../../shared/ui/SearchInput";
import CustomSelect from "../../shared/ui/CustomSelect";

const mockCurrencies = [
  {
    id: 1,
    name: "BTC"
  },
  {
    id: 2,
    name: "ETH"
  },
  {
    id: 3,
    name: "USDT"
  },
  {
    id: 4,
    name: "TUSD"
  },
  {
    id: 5,
    name: "USDC"
  },
  {
    id: 6,
    name: "TRX"
  },
  {
    id: 7,
    name: "BNB"
  },
  {
    id: 8,
    name: "XRP"
  },
  {
    id: 9,
    name: "LTC"
  },
]

const mockNetworks = [
  {
    id: 1,
    name: "TRC20"
  },
  {
    id: 2,
    name: "ERC20"
  },
  {
    id: 3,
    name: "BSC20"
  }
]

const mockStatuses = [
  {
    id: 1,
    name: "CREATED"
  },
  {
    id: 2,
    name: "COMPLETED"
  },
  {
    id: 3,
    name: "EXPIRED"
  }
]

const TransactionFilter = () => {

  const [currencies, setCurrencies] = useState('');
  const [networks, setNetworks] = useState('');
  const [statuses, setStatuses] = useState('');

  const handleChange = (event) => {
    setCurrencies(event.target.value);
  };

  const handleChangeNetworks = (event) => {
    setNetworks(event.target.value);
  };

  const handleChangeStatuses = (event) => {
    setStatuses(event.target.value);
  };

  return (
    <div className={s.form}>
      <CustomSelect data={mockCurrencies} name={currencies} title={'currencies'} handleChangeStatuses={handleChange} />
      <CustomSelect data={mockNetworks} name={networks} title={'networks'} handleChangeStatuses={handleChangeNetworks} />
      <CustomDatePicker which={"from"} />
      <CustomDatePicker which={"to"} />
      <CustomSelect data={mockStatuses} name={statuses} title={'statuses'} handleChangeStatuses={handleChangeStatuses} />
      <SearchInput />
    </div>
  );
}

export default TransactionFilter;