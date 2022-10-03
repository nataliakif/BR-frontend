const calculateStatistics = readStatistics => {
  const uniqueDatesOfReading = [
    ...new Set(readStatistics.map(item => item.dateTime.slice(0, 10))),
  ];

  const result = uniqueDatesOfReading.map(date => {
    return {
      date: date,
      pageAmount: readStatistics
        .filter(stat => stat.dateTime.slice(0, 10) === date)
        .reduce(
          (totalSum, stat) => (totalSum += Number.parseInt(stat.pageAmount)),
          0
        ),
    };
  });
  return result ?? [];
};

export default calculateStatistics;
