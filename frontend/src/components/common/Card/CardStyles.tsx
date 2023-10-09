import styled from "styled-components";
import { theme } from "../../../theme/Theme";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${theme.color.primarySettingsColor};
  border-radius: 15px;
  gap: 2rem;
  padding: 2rem;
  width: 34rem;
  height: 7rem;
  color: white;

  img {
    aspect-ratio: 1/1;
    height: 5rem;
    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    span {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
`;
