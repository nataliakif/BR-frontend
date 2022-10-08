import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LanguageSwitcher from 'components/LanguageSwitcher';
import { getCurrentStatus } from 'redux/authUser/authUserSlice';
import Navigation from './Navigation/Navigation';
import UserBar from './UserBar/UserBar';
import Logout from './Logout/Logout';
import s from '../Header/Header.module.css';
import Container from 'components/Container';

const Header = () => {
  const isLoggedIn = useSelector(getCurrentStatus);
  const headerStyles = [s.container];

  if (isLoggedIn) {
    headerStyles.push(s.loggedIn);
  }

  return (
    <div className={s.headerContainer}>
      <Container>
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
        </Container>
        </div>
        
  );
};

export default Header;
