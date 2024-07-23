import "./sidebar.css"
import LOGO from "../../assets/img/logo.png"
import ICONBALANCE from "../../assets/img/IconBalance.svg"
import ICONTRANS from "../../assets/img/IconT.svg"
import ICONWIDTH from "../../assets/img/IconWidth.svg"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img className="logo" src={LOGO} width={188} height={38} alt="logo" />
      <nav>
        <NavLink to="/" className='item' >
          <img src={ICONBALANCE} />
          <span>Balance</span>
        </NavLink>
        <NavLink to="/transactions" className='item'>
          <img src={ICONTRANS} />
          <span>Transactions</span>
        </NavLink>
        <NavLink to="/withdrawals" className='item'>
          <img src={ICONWIDTH} />
          <span>Withdrawals</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;