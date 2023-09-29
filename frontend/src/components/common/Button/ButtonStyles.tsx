import styled from "styled-components";
import { ButtonType, buttons } from "./ButtonTypes";
import { StyledSpinner } from "../Spinner/SpinnerStyles";

// import { StyledSpinner } from "../spinner/spinner.styles";

export const StyledButton = styled.button<{ buttonType: ButtonType }>`
  color: ${({ buttonType }) => buttons[buttonType]?.color || "#fff"};
  background: ${({ buttonType }) => buttons[buttonType]?.background};
  width: ${({ buttonType }) => buttons[buttonType]?.width || "fit-content"};
  border: ${({ buttonType }) => buttons[buttonType]?.border || "none"};
  font-weight: ${({ buttonType }) => buttons[buttonType]?.fontWeight || 700};
  font-size: ${({ buttonType }) => buttons[buttonType]?.fontSize || "2rem"};
  font-family: ${({ buttonType }) =>
    buttons[buttonType]?.fontFamily || "Poppins"};
  &:hover {
    color: ${({ buttonType }) => buttons[buttonType]?.hoverColor || "#fff"};
    background: ${({ buttonType }) => buttons[buttonType]?.hoverBackground};
  }

  &:active {
    color: ${({ buttonType }) => buttons[buttonType]?.activeColor || "#fff"};
    background: ${({ buttonType }) => buttons[buttonType]?.activeBackground};
    border: ${({ buttonType }) =>
      buttons[buttonType]?.activeBackground || "none"};
  }
`;

export const ButtonSpinner = styled(StyledSpinner)`
  width: 30px;
  height: 30px;
`;
// export const VortexSpinner = styled(Vortex)`
//   width: 30px;
//   height: 30px;
// `;
export const StyledButtonSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
