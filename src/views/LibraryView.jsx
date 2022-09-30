import Container from 'components/Container';
import InputBook from 'components/InputBook';
import ContainerLibrary from 'components/ContainerLibrary';
import GoingToRead from 'components/GoingToRead';
import { useFetchBooksQuery } from 'redux/books/booksApi';
import ReadingNow from 'components/ReadingNow';
import AlreadyRead from '../components/AlreadyRead/AlreadyRead';

const LibraryView = () => {
  const { data } = useFetchBooksQuery();

  return (
    <>
      <Container>
        <InputBook />
      </Container>

{data && <ContainerLibrary>
        <AlreadyRead alreadyReadListBooks = {data.data.result.filter(book=> book.status === "finished")} />
        <ReadingNow readingNowListBooks={data.data.result.filter(book=> book.status === "reading_now") } />
        <GoingToRead goingToReadListBooks = {data.data.result.filter(book=> book.status === "going_to_read")}/>
      </ContainerLibrary>}

    </>
  );
};

export default LibraryView;
