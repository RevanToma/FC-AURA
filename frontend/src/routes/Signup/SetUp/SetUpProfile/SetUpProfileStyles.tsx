import { Form } from "../../../../components/common/Form/ReusableFormStyles";
import styled from "styled-components";
import { ChangeEmailContainer } from "../../../AccountSettings/ChangeEmail/ChangeEmailStyles";
import GobackNav from "../../../../components/common/GoBackNav/GobackNav";
import { theme } from "../../../../theme/Theme";

export const SetUpProfileForm = styled(Form)`
  gap: 1rem;
  padding: 1rem;
  min-width: 35rem;
  textarea {
    resize: none;
  }
  label {
    align-self: flex-start;
  }
`;

export const SetUpProfileContainer = styled(ChangeEmailContainer)`
  gap: 2rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    width: 34rem;

    color: white;
    font-size: 2rem;
    font-family: Roboto;
    font-weight: 500 !important;
    line-height: 24px;
    letter-spacing: 1.2px;
  }

  h6 {
    margin-bottom: 2rem;
  }

  .createLater {
    color: #323232;
    font-weight: 600 !important;
  }import { theme } from './../../../../theme/Theme';

  .skillsBtn {
    width: fit-content;
    font-size: 1.4rem;
    letter-spacing: 0.2rem;
    padding: 1rem 1rem;
  }

  p{
    color: #ddd073;
    ${theme.label}
  }
`;

export const SetUpProfileNav = styled.div`
  display: flex;
  justify-content: center;
`;

export const PreviewH2 = styled.h2`
  ${theme.h1}
  width: 35rem;
  text-align: center;
  color: white;
  font-weight: 500;
  color: ${theme.color.primaryYellow};
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  button {
    width: 35rem;
  }
`;
