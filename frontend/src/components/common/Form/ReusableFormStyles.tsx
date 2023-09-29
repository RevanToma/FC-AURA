import styled from "styled-components";
import { theme } from "../../../theme/Theme";
export const Label = styled.label<{ validatedField?: boolean }>`
  color: #a8a2a2;
  ${theme.label}
  padding-left: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.form`
  box-shadow: ${theme.primaryShadow};
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  border-radius: 5px;

  div {
    width: 100%;
    padding: 1.5rem;
    position: relative;
  }

  button {
    width: 100%;
  }
`;

export const TeamMember = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 4rem;
  h4 {
    color: ${theme.color.primaryYellow};
    font-family: "Poppins";
    font-white: 500;
    font-size: 1.6rem;
    letter-spacing: 2%;
  }
`;

export const ToggleCheckboxWrapper = styled.label`
  position: relative;
  width: 10rem;
  height: 4rem;
  display: inline-block;
`;

export const ToggleCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const ToggleSlider = styled.span`
  box-shadow: 0px 6px 8px 3px rgba(0, 0, 0, 0.5) inset;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 4rem;
    width: 4rem;
    left: 1px;
    bottom: 0px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

ToggleCheckbox.defaultProps = {
  type: "checkbox",
};

// Apply styles based on whether the checkbox is checked
export const StyledToggleCheckbox = styled(ToggleCheckbox).attrs({
  type: "checkbox",
})`
  &:checked + ${ToggleSlider} {
    background-color: ${theme.color.primaryGreen};
  }

  &:checked + ${ToggleSlider}:before {
    transform: translateX(60px);
  }
`;
