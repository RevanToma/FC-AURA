import { Outlet, useLocation } from "react-router-dom";
import * as S from "./NavBarStyles";
import FCAURALOGO from "../../assets/images/FCAURA-Logo.png";
import { FiSettings } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <S.NavBarContainer>
        <S.NavBarList>
          <S.NavLinkDiv active={pathname === "/"}>
            <S.NavLink to="/">
              <img src={FCAURALOGO} alt="FC aura" />
              <span>Hem</span>
            </S.NavLink>
          </S.NavLinkDiv>
          <S.NavLinkDiv active={pathname.startsWith("/teamMembers")}>
            <S.NavLink to="/teamMembers">
              {<FaUsers size={37} />}
              <span>Medlemmar</span>
            </S.NavLink>
          </S.NavLinkDiv>
          <S.NavLinkDiv active={pathname.startsWith("/account")}>
            <S.NavLink to="/account">
              {<FiSettings size={37} />}
              <span>Inställningar</span>
            </S.NavLink>
          </S.NavLinkDiv>
        </S.NavBarList>
      </S.NavBarContainer>
      <Outlet />
    </>
  );
};

export default NavBar;
