const getTotalPageAmount = books => {
  return books.reduce((sum, book) => sum + book.amountOfPages, 0) ?? 0;
};

export default getTotalPageAmount;
