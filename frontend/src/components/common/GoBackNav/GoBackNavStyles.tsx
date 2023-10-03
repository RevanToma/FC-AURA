import styled from "styled-components";
import { theme } from "../../../theme/Theme";

export const Title = styled.h6`
  text-align: center;
  ${theme.h6}
  color: ${({ color }) => (color ? color : "")};
`;

export const GoBackNav = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 2rem 2rem;
`;
