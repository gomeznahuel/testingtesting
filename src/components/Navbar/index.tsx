import { NavLink } from "react-router-dom";
import { NavbarContainer, NavbarList, NavbarListItem } from "./Navbar.style";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarListItem><NavLink to="/">home</NavLink></NavbarListItem>
        <NavbarListItem><NavLink to="/contact">contact</NavLink></NavbarListItem>
      </NavbarList>
    </NavbarContainer>
  );
};
