// import Container from 'components/Container';
// import InputBook from 'components/InputBook';
import ContainerLibrary from 'components/ContainerLibrary';
import GoingToRead from 'components/GoingToRead';
import { useFetchBooksQuery } from 'redux/books/booksApi';
import ReadingNow from 'components/ReadingNow';
import AlreadyRead from 'components/AlreadyRead';

const LibraryView = () => {
  const { data } = useFetchBooksQuery();
  return (
    <>
      {/* <Container>
        <InputBook />
      </Container> */}
      {data && (
        <ContainerLibrary>
          <AlreadyRead />
          <ReadingNow />
          <GoingToRead
            goingToReadListBooks={data.data.result.filter(
              book => book.status === 'going_to_read'
            )}
          />
        </ContainerLibrary>
      )}
    </>
  );
};

export default LibraryView;
// alreadyReadListBooks
// readingNowListBooks
// goingToReadListBooks
