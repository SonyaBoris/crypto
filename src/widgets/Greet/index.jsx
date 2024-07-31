import s from "./index.module.css"
import { Link } from "react-router-dom"
import ARROW from "../../shared/assets/img/minus.svg"
import MINUS from "../../shared/assets/img/minus.svg"
import { useState } from "react"
import Currency from "../../entities/currencies/ui/Currency"
import { mockUser } from "../../entities/user/api/data"

const Greet = () => {

  const [currency, setCurrency] = useState("USDT")
  const [currencyModal, setCurrencyModal] = useState(false)

  return (
    <div className={s.greet}>
      <div className={s.left}>
        <h2 className={s.hello}>Hello, {mockUser.name}</h2>
        <span className={s.desc}>Your balance today</span>
        <div className={s.block}>
          <span className={s.balance}> {mockUser.balance}</span>
          <button className={s.balanceBtn} onClick={() => setCurrencyModal(!currencyModal)}>
            {currency}
            <img src={currencyModal ? MINUS : ARROW} alt="" />
            {currencyModal && <Currency setCurrency={setCurrency} setCurrencyModal={setCurrencyModal} currency={currency} />}
          </button>
        </div>

        <span className={s.convert}>≈ 2,47 BTC</span>
      </div>
      <div className={s.right}>
        <Link to="/withdrawals" className={s.btn}>Withdrawal</Link>
        <svg width="232" height="64" viewBox="0 0 232 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 63C1 63 15.2278 30.7609 34 25.8408C42.5327 23.6045 47.7164 22.8193 56 25.8408C65.7425 29.3946 64.7722 42.163 75 43.9183C87.6324 46.0862 93.5474 35.4081 102 25.8408C109.21 17.68 105.803 5.6582 116 1.73761C127.525 -2.69355 132.652 14.2658 145 14.7935C158.601 15.3748 163.653 -0.923079 177 1.73761C193.381 5.00313 184.354 34.4538 201 35.8839C215.243 37.1075 231 14.7935 231 14.7935" stroke="#03C988" />
          <path d="M34 25.8408C15.2278 30.7609 1 63 1 63H231V14.7935C231 14.7935 215.243 37.1075 201 35.8839C184.354 34.4538 193.381 5.00313 177 1.73761C163.653 -0.923079 158.601 15.3748 145 14.7935C132.652 14.2658 127.525 -2.69355 116 1.73761C105.803 5.6582 109.21 17.68 102 25.8408C93.5474 35.4081 87.6324 46.0862 75 43.9183C64.7722 42.163 65.7425 29.3946 56 25.8408C47.7164 22.8193 42.5327 23.6045 34 25.8408Z" fill="url(#paint0_linear_1_293)" />
          <defs>
            <linearGradient id="paint0_linear_1_293" x1="125" y1="66.9534" x2="124.512" y2="0.733579" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9CD1F6" stopOpacity="0.2" />
              <stop offset="1" stopColor="#03C988" />
            </linearGradient>
          </defs>
        </svg>

      </div>

    </div>
  );
}

export default Greet;