import { Routes, Route } from "react-router-dom";
import Balance from '../pages/Balance';
import Transactions from '../pages/Transactions';
import Withdrawals from "../pages/Withdrawals";
import Sidebar from "../features/Sidebar";

function App() {

  return (
    <>
      <div className="decor" />
      <div className="main">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Balance />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/withdrawals" element={<Withdrawals />} />
        </Routes>
      </div>
    </>
  )
}

export default App
