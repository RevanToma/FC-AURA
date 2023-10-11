import styled from "styled-components";
import { theme } from "../../theme/Theme";

export const FooterContainer = styled.div`
  border-top: 2px solid #f1dd56;
  margin-top: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  h4 {
    ${theme.h4}
    color:#9b9b9b;
  }

  p {
    ${theme.backgroundInfo};
    color: #d4d4d4;
  }
  a {
    padding-left: 0.5rem;
    color: ${theme.color.primaryYellow};
  }

  .sponsors {
    display: flex;
    align-items: center;
    img {
      width: 15rem;
    }
  }
`;
