import s from './Chart.module.css';

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['', '', '', 'Time'];

export const Chart = ({ plan, actPages }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: false,
    },
    scales: {
      x: {},
      y: {
        min: 1,
        max: plan * 2,
        ticks: { display: false },
        grid: { display: false },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Plan',
        data: [30, 30, 30, 30],
        backgroundColor: 'transparent',
        borderColor: 'rgb(0, 0, 0)',
        pointBorderColor: 'rgb(0, 0, 0)',
        pointBorderWidth: 4,
      },
      {
        label: 'Act',
        data: actPages[1],
        backgroundColor: 'transparent',
        borderColor: '#FF6B08',
        pointBorderColor: '#FF6B08',
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  };

  return (
    <div className={s.container}>
      <Line options={options} data={data} />
    </div>
  );
};
