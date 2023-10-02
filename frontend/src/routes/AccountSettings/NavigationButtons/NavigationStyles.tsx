import styled from "styled-components";
import { theme } from "../../../theme/Theme";

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  svg {
    margin: 0rem 1rem;
  }
  ${theme.label}
  font-size: 2rem;
`;
