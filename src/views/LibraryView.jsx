import AlreadyRead from 'components/AlreadyRead';
import Container from 'components/Container';
import GoingToRead from 'components/GoingToRead';
import ReadingNow from 'components/ReadingNow';

const LibraryView = () => {
  return (
    <>
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
