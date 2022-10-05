import Container from 'components/Container';
import InputBook from 'components/InputBook';
import ContainerLibrary from 'components/ContainerLibrary';
import StartModal from 'components/modals/StartModal';
import GoingToRead from 'components/GoingToRead';
import { useFetchBooksQuery } from 'redux/books/booksApi';
import ReadingNow from 'components/ReadingNow';
import AlreadyRead from '../components/AlreadyRead/AlreadyRead';
import Progress from 'components/Progress/Progress';

const LibraryView = () => {
  const { data, isLoading } = useFetchBooksQuery();
  const alreadyReadListBooks = data?.filter(book => book.status === 'finished');
  const readingNowListBooks = data?.filter(
    book => book.status === 'reading_now'
  );
  const goingToReadListBooks = data?.filter(
    book => book.status === 'going_to_read'
  );
  return isLoading ? (
    <Progress />
  ) : (
    <>
      <Container>
        <InputBook addedBookTitles={data?.map(book => book.bookTitle)} />
      </Container>
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
        </ContainerLibrary>
      )}
    </>
  );
};

export default LibraryView;
