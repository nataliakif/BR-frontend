import AlreadyReadMobile from './AlreadyReadMobile/AlreadyReadMobile';
import AlreadyReadMain from './AlreadyReadMain/AlreadyReadMain';
import useIsMobile from "../../helpers/useIsMobile";

// import s from "./AlreadyRead.module.css"

const AlreadyRead = () => {
  const isMobile = useIsMobile();
  return (
    <>
      
      { isMobile ? <AlreadyReadMobile /> : <AlreadyReadMain/>}
    </>
  );
};

export default AlreadyRead;