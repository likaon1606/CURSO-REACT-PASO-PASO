import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? "activo" : null)}
        NavLink
        to='/'
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activo" : null)}
        NavLink
        to='/reyes/atanagildo'
      >
        Atanagildo
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activo" : null)}
        NavLink
        to='/reyes/ataulfo'
      >
        Ataúlfo
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activo" : null)}
        NavLink
        to='/reyes/ervigio'
      >
        Ervigio
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activo" : null)}
        NavLink
        to='/reyes/leovigildo'
      >
        Leovigildo
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activo" : null)}
        NavLink
        to='/reyes/recesvinto'
      >
        Recesvinto
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activo" : null)}
        NavLink
        to='/reyes/sisebuto'
      >
        Sisebuto
      </NavLink>
    </nav>
  );
};

export default Nav;
