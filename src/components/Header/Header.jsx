import Navigation from './Navigation/Navigation';
import UserBar from './UserBar/UserBar';
import LanguageSwitcher from 'components/LanguageSwitcher';
import { getCurrentStatus } from 'redux/authUser/authUserSlice';
import { NavLink } from 'react-router-dom';

import s from '../Header/Header.module.css';
import Logout from './Logout/Logout';
import { useSelector } from 'react-redux';

const Header = () => {
  const isLoggedIn = useSelector(getCurrentStatus);
  const headerStyles = [s.container];

  if (isLoggedIn) {
    headerStyles.push(s.loggedIn);
  }

  return (
    <header className={s.header}>
      <div className={headerStyles.join(' ')}>
        <NavLink to="/library" className={s.logo}>
          BR
        </NavLink>
        <LanguageSwitcher isLoggedIn={isLoggedIn} />
        {isLoggedIn && (
          <>
            <UserBar />
            <Navigation />
            <Logout />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
