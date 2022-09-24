import Navigation from './Navigation/Navigation';
import UserBar from './UserBar/UserBar';

import s from '../Header/Header.module.css';
import Logout from './Logout/Logout';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <span className={s.logo}>BR</span>
                <>
                    <UserBar />
                    <Navigation />
                    <Logout/>
                </>
            </div>
        </header>
    );
}

export default Header;