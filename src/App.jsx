import { Routes, Route, Outlet, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar"
import Balance from './pages/Balance';
import Transactions from './pages/Transactions';
import Withdrawals from "./pages/Withdrawals";

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
