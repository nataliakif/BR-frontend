import PropTypes from 'prop-types';
import ReadingNowMobile from './ReadingNowMobile/ReadingNowMobile';
import ReadingNowMain from './ReadingNowMain/ReadingNowMain';
import useIsMobile from '../../helpers/useIsMobile';

const ReadingNow = ({ readingNowListBooks }) => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <ReadingNowMobile readingNowListBooks={readingNowListBooks} />
      ) : (
        <ReadingNowMain readingNowListBooks={readingNowListBooks} />
      )}
    </>
  );
};

ReadingNow.propTypes = {
  readingNowListBooks: PropTypes.arrayOf(
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

export default ReadingNow;
