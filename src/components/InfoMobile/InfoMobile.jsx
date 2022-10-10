import Media from 'react-media';

import StartMobileView from 'views/StartMobileView';
import LoginView from 'views/LoginView';

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
          {matches.tablet && <LoginView />}
        </>
      )}
    </Media>
  );
};

export default InfoMobile;
