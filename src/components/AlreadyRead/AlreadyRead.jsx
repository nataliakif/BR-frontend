import AlreadyReadMobile from './AlreadyReadMobile/AlreadyReadMobile';
import AlreadyReadMain from './AlreadyReadMain/AlreadyReadMain';
import useIsMobile from "../../helpers/useIsMobile";

const AlreadyRead = ({alreadyReadListBooks}) => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? <AlreadyReadMobile alreadyReadListBooks={alreadyReadListBooks} /> : <AlreadyReadMain alreadyReadListBooks={alreadyReadListBooks} />}
    </>
  );
};

export default AlreadyRead;