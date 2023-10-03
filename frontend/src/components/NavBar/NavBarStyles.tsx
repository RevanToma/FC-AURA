import styled from "styled-components";
import { theme } from "../../theme/Theme";
import { Link } from "react-router-dom";
type NavLinkProps = {
  active: boolean;
  isSignedIn?: boolean;
};
export const NavBarContainer = styled.nav`
  position: fixed;
  bottom: 0;
  z-index: 100;
  width: 100%;

  img {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const NavBarList = styled.ul`
  display: flex;
  align-items: center;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.1);
  background: ${theme.color.primaryBackground};

  border-radius: 10px 10px 0 0;
  justify-content: space-around;
  height: 100%;
  padding: 0.5rem;

  a {
    text-decoration: none;
    list-style: none;
    gap: 0.5rem;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  span {
    color: white;
   
`;

export const NavLinkDiv = styled.div<NavLinkProps>`
  span,
  a,
  img {
    color: ${({ active }) =>
      active ? theme.color.primaryYellow : " rgba(0, 0, 0, 0.40) "};
    font-weight: 700;
    filter: ${({ active }) => (active ? "none" : "brightness(0.5)")};
    span {
      border-bottom: ${({ active }) =>
        active ? `1px ${theme.color.primaryYellow} solid` : " none"};
    }
  }
`;
