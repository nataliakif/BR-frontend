import PropTypes from 'prop-types';
import AlreadyReadMobile from './AlreadyReadMobile/AlreadyReadMobile';
import AlreadyReadMain from './AlreadyReadMain/AlreadyReadMain';
import useIsMobile from '../../helpers/useIsMobile';

const AlreadyRead = ({ alreadyReadListBooks }) => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <AlreadyReadMobile alreadyReadListBooks={alreadyReadListBooks} />
      ) : (
        <AlreadyReadMain alreadyReadListBooks={alreadyReadListBooks} />
      )}
    </>
  );
};

AlreadyRead.propTypes = {
  alreadyReadListBooks: PropTypes.arrayOf(
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
  ),
};

export default AlreadyRead;
