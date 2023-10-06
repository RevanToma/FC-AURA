import { Form } from "../../../../components/common/Form/ReusableFormStyles";
import styled from "styled-components";
import { ChangeEmailContainer } from "../../../AccountSettings/ChangeEmail/ChangeEmailStyles";
import GobackNav from "../../../../components/common/GoBackNav/GobackNav";

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
    font-weight: 600 !important;
    line-height: 24px;
    letter-spacing: 1.2px;
  }
  h6 {
    margin-bottom: 2rem;
  }
`;

export const SetUpProfileNav = styled.div`
  display: flex;
  justify-content: center;
`;
