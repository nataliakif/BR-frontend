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
import { breadcrumbsClasses } from '@mui/material';

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
    let x, y;
    ctx.font = 'bold 12px Montserat';
    ctx.textBaseLine = 'middle';
    ctx.textAlign = 'center';

    _metasets.forEach(meta => {
      ctx.fillStyle = meta._dataset.borderColor;

      x = meta.data[meta.data.length - 1].x - meta._dataset.label.length * 5;
      y = meta.data[meta.data.length - 1].y - 10;

      ctx.fillText(meta._dataset.label, x, y);
    });
    ctx.fillStyle = '#091E3F';
    ctx.fillText('TIME', x, chart.chartArea.height + 23);
  },
};

export const Chart = ({ plan, readingStatistics }) => {
  const dates = readingStatistics.map(stat => stat.date);
  const pages = readingStatistics.map(stat => stat.pageAmount);

  let actPages = pages.length === 1 ? [pages, pages] : pages;

  let maxPagesValue = Math.max(...actPages.flatMap(item => item));

  let labels = [plan, plan];
  //dates.length > 1 ? dates : [...dates, ...dates];

  if (dates.length === 1) {
    labels = [...dates, ...dates];
  }
  if (dates.length > 1) {
    labels = dates;
  }

  let maxChartValue =
    plan * 2 > maxPagesValue
      ? plan * 2
      : (maxPagesValue += maxPagesValue * 0.1);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: { padding: { bottom: 20 } },
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
        data:
          actPages.length > 0 ? [...actPages.map(item => plan)] : [plan, plan],

        backgroundColor: '#F5F7FA',
        borderColor: 'rgb(0, 0, 0)',
        pointBorderColor: 'rgb(0, 0, 0)',
        pointBorderWidth: 4,
      },
    ],
  };

  if (actPages.length > 0) {
    data.datasets.push({
      label: 'ACT',
      data: actPages,
      backgroundColor: '#F5F7FA',
      borderColor: '#FF6B08',
      pointBorderColor: '#FF6B08',
      pointBorderWidth: 4,
      tension: 0.3,
    });
  }
  console.log(data);
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
