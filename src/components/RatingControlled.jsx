import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';

import { useEditBookMutation } from '../redux/books/booksApi';

const RatingControlled = ({ step, openedBook }) => {
  const [editBook] = useEditBookMutation();

  const { _id, bookTitle, author, publicationDate, amountOfPages, review } =
    openedBook;
  return (
    <Rating
      name="simple-controlled"
      value={openedBook.rating}
      precision={step}
      size="small"
      onChange={(event, newValue) => {
        editBook({
          id: _id,
          bookTitle,
          author,
          publicationDate,
          amountOfPages,
          review,
          rating: newValue,
        });
      }}
    />
  );
};

RatingControlled.propTypes = {
  step: PropTypes.number.isRequired,
  openedBook: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publicationDate: PropTypes.number.isRequired,
    amountOfPages: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    rating: PropTypes.number,
    review: PropTypes.string,
  }).isRequired,
};

export default RatingControlled;
