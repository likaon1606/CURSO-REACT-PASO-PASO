import { NavLink } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        to='/'
      >
        Página 1
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        to='/pagina2'
      >
        Página 2
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        to='/pagina3'
      >
        Página 3
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        to='/pagina4/G'
      >
        Página 4
      </NavLink>
    </nav>
  );
};

export default Nav;
