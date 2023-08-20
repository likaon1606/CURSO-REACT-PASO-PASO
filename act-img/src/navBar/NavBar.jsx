import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <div>
          <NavLink to='/cp'>Capital y Patagonia</NavLink>
          <NavLink to='/no'>Norte y Este</NavLink>
          <NavLink to='/login'>Login</NavLink>
        </div>

        <button>Logout</button>
      </nav>
    </>
  );
};

export default NavBar;
