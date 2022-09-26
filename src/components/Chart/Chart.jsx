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

export const Chart = ({ plan, readingStatistics }) => {
  const dates = readingStatistics.map(stat => stat.date);
  const pages = readingStatistics.map(stat => stat.pageAmount);

  let actPages = pages.length > 1 ? pages : [...pages, pages];

  let maxPagesValue = Math.max(...actPages.flatMap(item => item));

  const labels = dates.length > 1 ? dates : [...dates, dates];

  //console.log(maxPagesValue);

  let maxChartValue =
    plan * 2 > maxPagesValue
      ? plan * 2
      : (maxPagesValue += maxPagesValue * 0.1);

  const options = {
    responsive: true,
    plugins: {
      legend: false,
    },
    scales: {
      x: { ticks: { display: false } },
      y: {
        min: 1,
        max: maxChartValue,
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
        data: [...actPages.map(item => plan)],
        backgroundColor: 'transparent',
        borderColor: 'rgb(0, 0, 0)',
        pointBorderColor: 'rgb(0, 0, 0)',
        pointBorderWidth: 4,
      },
      {
        label: 'Act',
        data: actPages,
        backgroundColor: 'transparent',
        borderColor: '#FF6B08',
        pointBorderColor: '#FF6B08',
        pointBorderWidth: 4,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className={s.container}>
      <Line options={options} data={data} />
    </div>
  );
};
