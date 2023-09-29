import styled from "styled-components";
import { theme } from "../../theme/Theme";

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 2rem 1rem;

  h1 {
    color: #ffffff;
    ${theme.h1}
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  gap: 4rem;
  width: 35rem;
  border-top: 2px solid rgba(0, 0, 0, 0.3);
  h6 {
    color: #ffffff;
    ${theme.footerH6}
  }
`;
