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

const customLegend = {
  id: 'customLegend',
  afterDraw: (chart, args, options) => {
    const { _metasets, ctx } = chart;
    console.log(chart);
    //ctx.save();

    _metasets.forEach(meta => {
      ctx.font = 'bolder 12px Montserat';
      ctx.fillStyle = meta._dataset.borderColor;
      ctx.textBaseLine = 'middle';
      ctx.textAlign = 'center';
      ctx.fillText(
        meta._dataset.label,
        meta.data[meta.data.length - 1].x - meta._dataset.label.length * 5,
        meta.data[meta.data.length - 1].y - 10
      );
      console.log('here');
    });
  },
};

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
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
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
        label: 'PLAN',
        data: [...actPages.map(item => plan)],
        backgroundColor: '#F5F7FA',
        borderColor: 'rgb(0, 0, 0)',
        pointBorderColor: 'rgb(0, 0, 0)',
        pointBorderWidth: 4,
      },
      {
        label: 'ACT',
        data: actPages,
        backgroundColor: '#F5F7FA',
        borderColor: '#FF6B08',
        pointBorderColor: '#FF6B08',
        pointBorderWidth: 4,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className={s.container}>
      <p className={s.chart__title}>
        Amont of pages / DAY{' '}
        <span className={s.trainigPlan__title}>{plan}</span>
      </p>
      <Line options={options} data={data} plugins={[customLegend]} />
    </div>
  );
};
