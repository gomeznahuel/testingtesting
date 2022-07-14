import { HeaderContainer } from "./Header.style";
import { NavLink } from "react-router-dom";
import { Navbar } from "../../components/Navbar";

export const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to="/">almanoduerme</NavLink>
      <Navbar />
    </HeaderContainer>
  );
};
