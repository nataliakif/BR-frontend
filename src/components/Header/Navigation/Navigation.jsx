import { NavLink } from "react-router-dom";
import sprite from '../images/sprite.svg';
import s from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={s.nav}>
            <a
                className={s.nav_link}
                activeclassname={s.activeLink}
                href='/'
            >
                <svg className={s.navSvg}>
                    <use href={`${sprite}#icon-library-header`}></use>
                </svg>
            </a>
            <a
                className={s.nav_link}
                activeclassname={s.activeLink}
                href='/'
            >
                <svg className={s.navSvg}>
                    <use href={`${sprite}#icon-home-header`}></use>
                </svg>
            </a>
        </nav>
    );
}

export default Navigation;