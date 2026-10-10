import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function DashboardChart() {

  const data = {

    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
    ],

    datasets: [

      {
        label: "Food Recovered (KG)",

        data: [120,190,300,280,450,520],

        borderColor: "#2E8B57",

        backgroundColor: "rgba(46,139,87,.2)",

        fill:true,

        tension:.4,

      },

    ],

  };

  return (

    <div className="chart-card">

      <h3>Food Recovery Trend</h3>

      <Line data={data} />

    </div>

  );
}

export default DashboardChart;