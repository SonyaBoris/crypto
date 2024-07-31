import s from "./index.module.css"
import ARROW from "../../shared/assets/img/arrow.svg"
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

const sourceData = [
  {
    "label": "BTC",
    "value": 50
  },
  {
    "label": "ETH",
    "value": 10
  },
  {
    "label": "TUSD",
    "value": 10
  },
  {
    "label": "USDC",
    "value": 10
  },
  {
    "label": "Other",
    "value": 10
  }
]
const StatisticBlock = () => {
  return (
    <div className="content-block">
      <div className={s.head}>
        <h3 className="title-text">Your statistic</h3>
        <button className="title-text">
          Month
          <img src={ARROW} />
        </button>
      </div>
      <div className={s.diagram}>
        <Doughnut
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "#9cd1f6",
                  "#ff9940",
                  "#03c988",
                  "#179cf7",
                  "#ff6448",
                ],
                borderRadius: 8,
                hoverOffset: 30,
              },
            ],
          }}
          options={{
            layout: {
              padding: 10,
            },
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  usePointStyle: true,
                  padding: 60,
                }
              },

            },
          }}

        />
      </div>


    </div>
  );
}

export default StatisticBlock;