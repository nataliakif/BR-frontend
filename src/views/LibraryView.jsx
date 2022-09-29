import Container from 'components/Container';
import InputBook from 'components/InputBook';
import ContainerLibrary from 'components/ContainerLibrary';
import GoingToRead from 'components/GoingToRead';
import ReadingNow from 'components/ReadingNow';
import AlreadyRead from 'components/AlreadyRead';

const LibraryView = () => {
  return (
    <>
      <Container>
        <InputBook />
      </Container>

      <ContainerLibrary>
        <AlreadyRead />
        <ReadingNow />
        <GoingToRead />
      </ContainerLibrary>
    </>
  );
};

export default LibraryView;
