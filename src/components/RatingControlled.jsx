
import Rating from '@mui/material/Rating';
import { useEditBookMutation } from '../redux/books/booksApi';


const RatingControlled = ({ step, openedBook }) => {
  const [editBook] = useEditBookMutation();
  
    const {
                  _id,
                  bookTitle,
                  author,
                  publicationDate,
                  amountOfPages,
                  review,
                } = openedBook;
  return (
    <Rating
      name="simple-controlled"
      value={openedBook.rating}
      precision={step}
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

export default RatingControlled;
