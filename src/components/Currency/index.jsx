import "./currency.css"

const Currency = ({ setCurrency, setCurrencyModal, currency }) => {

  const click = (e) => {
    setCurrency(e)
    setCurrencyModal(false)
  }
  const mockCurrency = [
    { value: "USDT", id: 1 },
    { value: "BTC", id: 2 },
    { value: "ETH", id: 3 }
  ]
  return (
    <div className="currency-select">
      {mockCurrency.map(e =>
        <option className={currency == e.value ? "currency-option active-option" : "currency-option"} key={e.id} value={e.value} onClick={() => click(e.value)}>{e.value}</option>
      )}

    </div>
  );
}

export default Currency;