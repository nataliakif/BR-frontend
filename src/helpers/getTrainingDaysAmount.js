const getTrainingDaysAmount = (startDate, finishDate) => {
  return Math.round(
    (new Date(finishDate) - new Date(startDate)) / (60 * 60 * 24 * 1000)
  );
};

export default getTrainingDaysAmount;
