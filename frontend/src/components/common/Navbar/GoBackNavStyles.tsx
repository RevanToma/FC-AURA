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
  gap: 5rem;
  padding: 1rem 1rem;
`;
