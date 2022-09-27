import AlreadyRead from 'components/AlreadyRead';
import Container from 'components/Container';
import GoingToRead from 'components/GoingToRead';
import ReadingNow from 'components/ReadingNow';
import InputBook from 'components/InputBook';

const LibraryView = () => {
  return (
    <>
      <Container>
        <InputBook />
      </Container>
      <Container>
        <AlreadyRead />
      </Container>
      <Container>
        <ReadingNow />
      </Container>
      <Container>
        <GoingToRead />
      </Container>
    </>
  );
};

export default LibraryView;
