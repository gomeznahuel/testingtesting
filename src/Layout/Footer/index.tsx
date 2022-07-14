import { FooterContainer } from "./Footer.style";
import { getYear } from "../../helpers/Date";

export const Footer = () => {
  return (
    <FooterContainer>&copy; {getYear} - All rights reserved</FooterContainer>
  );
};
