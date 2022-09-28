import GoingToReadMobile from './GoingToReadMobile/GoingToReadMobile';
import GoingToReadMain from './GoingToReadMain/GoingToReadMain';
import useIsMobile from "../../helpers/useIsMobile";

// import s from "./GoingToRead.module.css"

const GoingToRead = () => {
  const isMobile = useIsMobile();
  return (
    <>
      
      { isMobile ? <GoingToReadMobile /> : <GoingToReadMain/>}
    </>
  );
};

export default GoingToRead;
