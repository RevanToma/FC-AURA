import styled from "styled-components";
import { ButtonType, buttons } from "./ButtonTypes";
import { StyledSpinner } from "../Spinner/SpinnerStyles";

// import { StyledSpinner } from "../spinner/spinner.styles";

export const StyledButton = styled.button<{ buttontypes: ButtonType }>`
  color: ${({ buttontypes }) => buttons[buttontypes]?.color || "#fff"};
  background: ${({ buttontypes }) => buttons[buttontypes]?.background};
  width: ${({ buttontypes }) => buttons[buttontypes]?.width || "fit-content"};
  border: ${({ buttontypes }) => buttons[buttontypes]?.border || "none"};
  font-weight: ${({ buttontypes }) => buttons[buttontypes]?.fontWeight || 700};
  font-size: ${({ buttontypes }) => buttons[buttontypes]?.fontSize || "2rem"};
  font-family: ${({ buttontypes }) =>
    buttons[buttontypes]?.fontFamily || "Poppins"};
  letter-spacing: ${({ buttontypes }) => buttons[buttontypes]?.letterSpacing};
  &:hover {
    color: ${({ buttontypes }) => buttons[buttontypes]?.hoverColor || "#fff"};
    background: ${({ buttontypes }) => buttons[buttontypes]?.hoverBackground};
  }

  &:active {
    color: ${({ buttontypes }) => buttons[buttontypes]?.activeColor || "#fff"};
    background: ${({ buttontypes }) => buttons[buttontypes]?.activeBackground};
    border: ${({ buttontypes }) =>
      buttons[buttontypes]?.activeBackground || "none"};
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
