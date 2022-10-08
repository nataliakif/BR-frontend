import { useTranslation } from 'react-i18next';
import InputBook from 'components/InputBook';
import ContainerLibrary from 'components/ContainerLibrary';
import StartModal from 'components/modals/StartModal';
import GoingToRead from 'components/GoingToRead';
import { useFetchBooksQuery } from 'redux/books/booksApi';
import { useNavigate } from 'react-router-dom';
import ReadingNow from 'components/ReadingNow';
import AlreadyRead from '../components/AlreadyRead/AlreadyRead';
import Progress from 'components/Progress/Progress';
import Button from '../components/Button/Button';

const LibraryView = () => {
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
    <>
      <InputBook addedBookTitles={data?.map(book => book.bookTitle)} />

      {!data?.length && !isLoading && <StartModal />}

      {data && (
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
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '40px',
              }}
            >
              <Button
                type="submit"
                className="main"
                text={t('library.myTraining')}
                onClick={routeChange}
              />
            </div>
          )}
        </ContainerLibrary>
      )}
    </>
  );
};

export default LibraryView;
