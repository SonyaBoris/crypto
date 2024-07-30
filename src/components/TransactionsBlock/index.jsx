import s from "./index.module.css"
import IMPORT from "../../assets/img/import.svg"
import UserMenu from "../UserMenu";
import TransactionFilter from "../TansactionFilter";

const mockTrans = [
  {
    id: 1,
    currency: "USDT_TRC20",
    amount: 84.36189232,
    date: "12:34 05-05-2024",
    status: "EXPIRED",
    uuid: "61b935f2-0a32-40ba-8e44-0cbd9374d21f"
  },
  {
    id: 2,
    currency: "USDT_TRC20",
    amount: 84.36189232,
    date: "12:34 05-05-2024",
    status: "EXPIRED",
    uuid: "61b935f2-0a32-40ba-8e44-0cbd9374d21f"
  },
  {
    id: 3,
    currency: "USDT_TRC20",
    amount: 84.36189232,
    date: "12:34 05-05-2024",
    status: "EXPIRED",
    uuid: "61b935f2-0a32-40ba-8e44-0cbd9374d21f"
  },
  {
    id: 4,
    currency: "USDT_TRC20",
    amount: 84.36189232,
    date: "12:34 05-05-2024",
    status: "EXPIRED",
    uuid: "61b935f2-0a32-40ba-8e44-0cbd9374d21f"
  },
  {
    id: 5,
    currency: "USDT_TRC20",
    amount: 84.36189232,
    date: "12:34 05-05-2024",
    status: "EXPIRED",
    uuid: "61b935f2-0a32-40ba-8e44-0cbd9374d21f"
  },
  {
    id: 6,
    currency: "USDT_TRC20",
    amount: 84.36189232,
    date: "12:34 05-05-2024",
    status: "EXPIRED",
    uuid: "61b935f2-0a32-40ba-8e44-0cbd9374d21f"
  },
  {
    id: 7,
    currency: "USDT_TRC20",
    amount: 84.36189232,
    date: "12:34 05-05-2024",
    status: "EXPIRED",
    uuid: "61b935f2-0a32-40ba-8e44-0cbd9374d21f"
  }
]

const TransactionsBlock = () => {
  return (
    <div className={s.page}>
      <div className="content-block">
        <header className={s.header}>
          <h2>Transactions</h2>
          <div className={s.menu}>
            <button className={s.btn}>
              import
              <img src={IMPORT} />
            </button>
            <UserMenu />
          </div>
        </header>
        <TransactionFilter />
        <div className={s.filter}>
          <h3 className="title-text">Currency</h3>
          <button className="title-text">
            Amount
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 7.99948L0 2.00049H10L5 7.99948Z" fill="#616161" />
            </svg>
          </button>
          <button className="title-text">
            Created date
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 7.99948L0 2.00049H10L5 7.99948Z" fill="#616161" />
            </svg>
          </button>
          <h3 className="title-text">Status</h3>
          <h3 className="title-text">Uuid</h3>
        </div>
        {mockTrans.map(item =>
          <div key={item.id} className={s.filter}>
            <span>{item.currency}</span>
            <div className={s.amount}>
              <span>{item.amount}</span>
              <span className={s.dolar}>$ 84.36</span>
            </div>
            <span>{item.date}</span>
            <span>{item.status}
            </span>
            <div className={s.uuid}>
              <span>{item.uuid}</span>
              <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.20711 18.2071C6.81658 18.5976 6.18342 18.5976 5.79289 18.2071C5.40237 17.8166 5.40237 17.1834 5.79289 16.7929L7.20711 18.2071ZM17.5 5.5C18.0523 5.5 18.5 5.94772 18.5 6.5V15.5C18.5 16.0523 18.0523 16.5 17.5 16.5C16.9477 16.5 16.5 16.0523 16.5 15.5V7.5L8.5 7.5C7.94772 7.5 7.5 7.05228 7.5 6.5C7.5 5.94772 7.94772 5.5 8.5 5.5L17.5 5.5ZM5.79289 16.7929L16.7929 5.79289L18.2071 7.20711L7.20711 18.2071L5.79289 16.7929Z" fill="black" />
                </svg>
              </button>
            </div>
          </div>
        )}
        <div className={s.pagination}>
          <button>
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 1L1.5 5L5.5 9" stroke="black" />
            </svg>
            back
          </button>
          <button className="pagination active">1</button>
          <button className="pagination">2</button>
          <button className="pagination">3</button>
          <button className="pagination">...</button>
          <button className="pagination">8</button>
          <button>
            next
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 1L4.5 5L0.5 9" stroke="black" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransactionsBlock;