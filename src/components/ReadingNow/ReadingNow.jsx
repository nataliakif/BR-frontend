// import PropTypes from 'prop-types';

import ReadingNowMobile from './ReadingNowMobile/ReadingNowMobile';
import ReadingNowMain from './ReadingNowMain/ReadingNowMain';
import useIsMobile from '../../helpers/useIsMobile';

// import s from "./ReadingNow.module.css"

// const ReadingNow = ({readingNowListBooks}) => {
const ReadingNow = () => {
  const isMobile = useIsMobile();
  
  return <>{isMobile ? <ReadingNowMobile /> : <ReadingNowMain />}</>;
// return <>{isMobile ? <ReadingNowMobilereadingNowListBooks={readingNowListBooks} /> : <ReadingNowMain readingNowListBooks={readingNowListBooks} />}</>;

};

// ReadingNow.propTypes = {
//   readingNowListBooks: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string.isRequired,
//       bookTitle: PropTypes.string.isRequired,
//       author: PropTypes.string.isRequired,
//       publicationDate: PropTypes.number.isRequired,
//       amountOfPages: PropTypes.number.isRequired,
//       status: PropTypes.string.isRequired,
//       rating: PropTypes.number,
//       review: PropTypes.string,
//     })
//   ).isRequired,
// };

export default ReadingNow;
