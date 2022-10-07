import { NavLink } from 'react-router-dom';
import sprite from '../images/sprite.svg';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        className={s.nav_link}
        activeclassname={s.activeLink}
        to={'/training'}
      >
        <svg className={s.navSvg}>
          <use href={`${sprite}#icon-library-header`}></use>
        </svg>
      </NavLink>
      <NavLink
        className={s.nav_link}
        activeclassname={s.activeLink}
        to={'/library'}
      >
        <svg className={s.navSvg}>
          <use href={`${sprite}#icon-home-header`}></use>
        </svg>
      </NavLink>
    </nav>
  );
};

export default Navigation;
