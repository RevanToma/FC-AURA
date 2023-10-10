import styled from "styled-components";
import { theme } from "../../theme/Theme";

export const AccountSettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  width: 100%;
  gap: 3rem;

  button {
    width: 33rem !important;
    font-weight: 500 !important;
  }
  button.signOut {
    margin-top: 7rem;
  }
  h4 {
    ${theme.settingsFont}

    margin-top: 2rem;
  }
`;

export const NavigationItems = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
