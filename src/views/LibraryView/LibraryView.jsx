import { useTranslation } from 'react-i18next';
import InputBook from 'components/InputBook';
import ContainerLibrary from 'components/ContainerLibrary';
import StartModal from 'components/modals/StartModal';
import GoingToRead from 'components/GoingToRead';
import { useFetchBooksQuery } from 'redux/books/booksApi';
import { useNavigate } from 'react-router-dom';
import ReadingNow from 'components/ReadingNow';
import AlreadyRead from '../../components/AlreadyRead/AlreadyRead';
import Progress from 'components/Progress/Progress';
import Button from '../../components/Button/Button';
import Container from 'components/Container';
import useIsMobile from '../../helpers/useIsMobile';
import { useState } from 'react';
import s from './LibraryView.module.css';
import { BsArrowLeft } from 'react-icons/bs';

const LibraryView = () => {
  const isMobile = useIsMobile();
  const [showElement, setShowElement] = useState(false);
  const { data, isLoading } = useFetchBooksQuery();
  const { t } = useTranslation();
  const alreadyReadListBooks = data?.filter(book => book.status === 'finished');
  const readingNowListBooks = data?.filter(
    book => book.status === 'reading_now'
  );
  const goingToReadListBooks = data?.filter(
    book => book.status === 'going_to_read'
  );

  const navigate = useNavigate();
  const routeChange = () => {
    navigate('/training');
  };
  return isLoading ? (
    <Progress />
  ) : (
    <Container>
      {isMobile && showElement && (
        <BsArrowLeft
          className={s.arrowButton}
          onClick={() => setShowElement(false)}
        />
      )}
      {(!isMobile || showElement) && (
        <InputBook addedBookTitles={data?.map(book => book.bookTitle)} />
      )}

      {!data?.length && !isLoading && <StartModal />}

      {data && (!showElement || !isMobile) && (
        <ContainerLibrary>
          {alreadyReadListBooks.length > 0 && (
            <AlreadyRead alreadyReadListBooks={alreadyReadListBooks} />
          )}
          {readingNowListBooks.length > 0 && (
            <ReadingNow readingNowListBooks={readingNowListBooks} />
          )}
          {goingToReadListBooks.length > 0 && (
            <GoingToRead goingToReadListBooks={goingToReadListBooks} />
          )}
          {goingToReadListBooks.length > 0 && (
            <div className={s.buttonWrapper}>
              <Button
                type="submit"
                className="main"
                text={t('library.myTraining')}
                onClick={routeChange}
              />
            </div>
          )}

          {isMobile && !showElement && (
            <button
              className={s.addPageBtn}
              type="button"
              onClick={() => setShowElement(true)}
            >
              +
            </button>
          )}
        </ContainerLibrary>
      )}
    </Container>
  );
};

export default LibraryView;
