import styled from "styled-components";
import { theme } from "../../../theme/Theme";

export const ChangeEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin-top: 4rem;
  textarea {
    background: #303841;
    border: none;
    color: white;

    &:active,
    &:focus {
      outline: 1px solid ${theme.color.primaryYellow};
    }
  }

  input {
    background: #303841;
    border: none;
    color: white;
    &:active,
    &:focus {
      outline: 1px solid ${theme.color.primaryYellow};
    }
  }
  form {
    box-shadow: none;
  }
  img {
    width: 20rem;
  }
  svg {
    font-size: 20rem;
  }
`;
