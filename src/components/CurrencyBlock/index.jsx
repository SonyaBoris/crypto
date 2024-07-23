import s from "./index.module.css"
import CURRENCY from "../../assets/img/Crypto.png"

const mockCurrency = [
  {
    id: 1,
    name: "BTC",
    balance: 1.987623456
  },
  {
    id: 2,
    name: "ETH",
    balance: 1.987623456
  },
  {
    id: 3,
    name: "TUSD",
    balance: 1.987623456
  },
  {
    id: 4,
    name: "TRX",
    balance: 1.987623456
  },
  {
    id: 5,
    name: "BNB",
    balance: 1.987623456
  },
  {
    id: 6,
    name: "XRP",
    balance: 1.987623456
  },
  {
    id: 7,
    name: "LTC",
    balance: 1.987623456
  },
  {
    id: 8,
    name: "USDS",
    balance: 1.987623456
  },
]
const CurrencyBlock = () => {
  return (
    <div className="content-block">
      <div className={s.filter}>
        <h3 className="title-text">Currency</h3>
        <button className="title-text">
          Balance
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7.99948L0 2.00049H10L5 7.99948Z" fill="#616161" />
          </svg>
        </button>
        <button className={s.titleText}>
          USDT
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7.99948L0 2.00049H10L5 7.99948Z" fill="#616161" />
          </svg>
        </button>
      </div>
      <div>
        {mockCurrency.map(e =>
          <div className={s.item} key={e.id}>
            <div className={s.currency}>
              <img src={CURRENCY} />
              <span>{e.name}</span>
            </div>
            <span>{e.balance}</span>
            <span className={s.cur}>138.703,101045</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default CurrencyBlock;