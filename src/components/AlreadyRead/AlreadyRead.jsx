import AlreadyReadMobile from './AlreadyReadMobile/AlreadyReadMobile';
import AlreadyReadMain from './AlreadyReadMain/AlreadyReadMain';
import useIsMobile from "../../helpers/useIsMobile";

// import s from "./AlreadyRead.module.css"

const AlreadyRead = ({alreadyReadListBooks}) => {
  const isMobile = useIsMobile();
  return (
    <>
      {/* <AlreadyReadMain/> */}
      {isMobile ? <AlreadyReadMobile alreadyReadListBooks={alreadyReadListBooks} /> : <AlreadyReadMain alreadyReadListBooks={alreadyReadListBooks} />}
    </>
  );
};

export default AlreadyRead;