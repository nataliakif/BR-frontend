const calculateStatistics = readStatistics => {
  const uniqueDatesOfReading = [
    ...new Set(readStatistics.map(item => item.flatMap(item => item.dateTime))),
  ];

  const result = uniqueDatesOfReading.map(date => {
    return {
      date: date,
      pageAmount: readStatistics
        .filter(stat => stat.dateTime === date)
        .reduce(
          (totalSum, stat) => (totalSum += Number.parseInt(stat.pageAmount)),
          0
        ),
    };
  });

  return result ?? [];
};

export default calculateStatistics;
