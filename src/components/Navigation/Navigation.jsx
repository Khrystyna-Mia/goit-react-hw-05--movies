import { NavLink } from 'react-router-dom';
import { RiMovie2Line } from 'react-icons/ri';
import s from './Navigation.module.css';

const setActive = ({ isActive }) => `${isActive ? s.active : s.link}`;

const Navigation = () => (
  <nav className={s.nav}>
    <RiMovie2Line size={40} fill="var(--accent-color)" />

    <NavLink to="/" className={setActive}>
      Home
    </NavLink>

    <NavLink to="/movies" className={setActive}>
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
