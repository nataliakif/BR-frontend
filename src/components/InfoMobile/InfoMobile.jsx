import Media from 'react-media';
import { Navigate } from 'react-router-dom';

import StartMobileView from 'views/StartMobileView';

const InfoMobile = () => {
  return (
    <Media
      queries={{
        mobile: '(max-width: 767px)',
        tablet: '(min-width: 768px)',
      }}
    >
      {matches => (
        <>
          {matches.mobile && <StartMobileView />}
          {matches.tablet && <Navigate to="/login" />}
        </>
      )}
    </Media>
  );
};

export default InfoMobile;
