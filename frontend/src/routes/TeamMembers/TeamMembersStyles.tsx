import styled from "styled-components";
import { theme } from "../../theme/Theme";

export const TeamMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  button {
    background: #1e1e1e;
    padding: 1rem;
    font-family: Roboto;
    font-weight: 500;
    font-size: 1.7rem;
    width: 11rem;
  }
`;

export const ProfilDiv = styled.div`
  box-shadow: 0px 4px 4px rgba(241, 210, 2, 0.5);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 2rem;

  img {
    width: 10rem;
    padding: 1rem;
  }

  h4 {
    color: #f1d202;
    font-size: 16px;
    font-family: Poppins;
    font-weight: 400;
    line-height: 2.4rem;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  span {
    background: ${theme.color.primarySettingsColor};
    color: white;
    border-radius: 1rem;
    padding: 0.5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  }
`;