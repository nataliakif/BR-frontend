import GoingToReadMobile from './mobile/GoingToReadMobile';
import GoingToReadMain from './GoingToReadMain/GoingToReadMain';
import useIsMobile from "../../helpers/useIsMobile";

// import s from "./GoingToRead.module.css"

const GoingToRead = () => {
  const isMobile = useIsMobile();
    
    // if (isMobile) {
    //     console.log("isMobile")
    // }
  return (
    <>
      
      { isMobile ? <GoingToReadMobile /> : <GoingToReadMain/>}
    </>
  );
};

export default GoingToRead;
