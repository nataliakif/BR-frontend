import ReadingNowMobile from './ReadingNowMobile/ReadingNowMobile';
import ReadingNowMain from './ReadingNowMain/ReadingNowMain';
import useIsMobile from "../../helpers/useIsMobile";

// import s from "./ReadingNow.module.css"

const ReadingNow= () => {
  const isMobile = useIsMobile();
  return (
    <>
      
      { isMobile ? <ReadingNowMobile /> : <ReadingNowMain/>}
    </>
  );
};

export default ReadingNow;
