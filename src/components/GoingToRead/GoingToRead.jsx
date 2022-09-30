import PropTypes from 'prop-types';

import GoingToReadMobile from './GoingToReadMobile/GoingToReadMobile';
import GoingToReadMain from './GoingToReadMain/GoingToReadMain';
import useIsMobile from "../../helpers/useIsMobile";

// import s from "./GoingToRead.module.css"

const GoingToRead = ({goingToReadListBooks}) => {
  const isMobile = useIsMobile();
  console.log(goingToReadListBooks)
  return (
    <>
      
      {isMobile ? <GoingToReadMobile goingToReadListBooks={goingToReadListBooks} /> : <GoingToReadMain goingToReadListBooks={goingToReadListBooks} />}
    </>
  );
};

GoingToRead.propTypes = {
  goingToReadListBooks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      bookTitle: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publicationDate: PropTypes.number.isRequired,
      amountOfPages: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      rating: PropTypes.number,
      review: PropTypes.string,
    })
  ).isRequired,
};

export default GoingToRead;


