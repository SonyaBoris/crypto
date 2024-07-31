import CurrencyBlock from "../../widgets/CurrencyBlock";
import Greet from "../../widgets/Greet";
import ProfileBlock from "../../widgets/ProfileBlock";
import StatisticBlock from "../../widgets/StatisticBlock";

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