import CurrencyBlock from "../../components/CurrencyBlock";
import Greet from "../../components/Greet";
import ProfileBlock from "../../components/ProfileBlock";
import StatisticBlock from "../../components/StatisticBlock";

const Balance = () => {
  return (
    <div className="balance-page">
      <Greet />
      <ProfileBlock />
      <CurrencyBlock />
      <StatisticBlock />
    </div>
  );
}

export default Balance;