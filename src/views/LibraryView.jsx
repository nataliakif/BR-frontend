import Container from 'components/Container';
import InputBook from 'components/InputBook';
import ContainerLibrary from 'components/ContainerLibrary';
import StartModal from 'components/modals/StartModal';
import GoingToRead from 'components/GoingToRead';
import { useFetchBooksQuery } from 'redux/books/booksApi';
import ReadingNow from 'components/ReadingNow';
import AlreadyRead from '../components/AlreadyRead/AlreadyRead';

const LibraryView = () => {
  const { data, isLoading } = useFetchBooksQuery();
  return (
    <>
      <Container>
        <InputBook />
      </Container>
      {!data?.length && !isLoading && <StartModal />}

      {data && (
        <ContainerLibrary>
          <AlreadyRead
            alreadyReadListBooks={data.filter(
              book => book.status === 'finished'
            )}
          />
          <ReadingNow
            readingNowListBooks={data.filter(
              book => book.status === 'reading_now'
            )}
          />
          <GoingToRead
            goingToReadListBooks={data.filter(
              book => book.status === 'going_to_read'
            )}
          />
        </ContainerLibrary>
      )}
    </>
  );
};

export default LibraryView;
