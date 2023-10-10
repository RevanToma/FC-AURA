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

export const Label = styled.label`
  color: #a8a2a2;
  ${theme.label}
  padding-left: 0.5rem;
  align-items: center;
  align-self: flex-start;
`;

export const ChangeEmailForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 37rem;
  max-width: 50rem;
  align-items: center;
  border-radius: 5px;
  gap: 1rem;

  padding: 1.5rem;
  button {
    margin-top: 2rem;
  }
  span {
    color: #ffa500;
  }
  textarea {
    resize: none;
  }
`;
