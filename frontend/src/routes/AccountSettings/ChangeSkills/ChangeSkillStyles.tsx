import styled from "styled-components";
import { theme } from "../../../theme/Theme";

export const ChangeSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  button {
    padding: 1.4rem;
  }
  input {
    padding: 2.5rem;
    margin: 1rem 0rem;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;

  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;

  button {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.2rem 1.2rem;
  }
`;

export const SelectDiv = styled.div`
  width: 100%;
  display: flex;
  justfiy-content: center;

  select {
    width: 100%;
    padding: 1.5rem;

    margin: 1rem 0rem;
    background: ${theme.color.primarySettingsColor};
    border: none;
    color: white;
  }
`;
