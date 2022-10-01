const calculateStatistics = books => {
  const readingStatistics = books
    .map(book => book.readStatistics)
    .map(item => item.flatMap(item => item))
    .flatMap(item => item);
  const uniqueDatesOfReading = [
    ...new Set(
      books
        .map(book => book.readStatistics)
        .map(item => item.flatMap(item => item.dateTime))
        .flatMap(item => item)
    ),
  ];

  const result = uniqueDatesOfReading.map(date => {
    return {
      date: date,
      pageAmount: readingStatistics
        .filter(stat => stat.dateTime === date)
        .reduce(
          (totalSum, stat) => (totalSum += Number.parseInt(stat.pageAmount)),
          0
        ),
    };
  });
  return result;
};

export default calculateStatistics;
