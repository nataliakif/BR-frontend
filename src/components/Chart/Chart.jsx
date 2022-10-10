import { useTranslation } from 'react-i18next';
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

const customLegend = t => {
  const legend = {
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
      ctx.fillText(t('statistics.time'), x, chart.chartArea.height + 23);
    },
  };
  return legend;
};

export const Chart = ({ plan, readingStatistics }) => {
  const { t } = useTranslation();
  const dates = readingStatistics.map(stat => stat.date);
  //console.log('dates', dates);
  const pages = readingStatistics.map(stat => stat.pageAmount);
  //console.log('pages', pages);
  let actPages = pages.length === 1 ? [...pages, ...pages] : pages;

  let maxPagesValue = Math.max(...actPages);
  //console.log('Max page value', maxPagesValue);
  let labels = [plan, plan];

  if (dates.length === 1) {
    labels = [...dates, ...dates];
  }
  if (dates.length > 1) {
    labels = dates;
  }
  //console.log('labels', labels);
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
        min: plan === 0 ? -5 : 1,
        max: plan === 0 ? 5 : maxChartValue,
        ticks: { display: false },
        grid: { display: false },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: t('statistics.plan'),
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

  return (
    <div className={s.chart}>
      <p className={s.chart__title}>
        {t('statistics.amountPagesDay')}
        <span className={s.trainigPlan__title}>{plan}</span>
      </p>
      <Line options={options} data={data} plugins={[customLegend(t)]} />
    </div>
  );
};
