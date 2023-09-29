import styled, { css } from "styled-components";
import { theme } from "../../../theme/Theme";

const commonStyles = css`
  width: 100%;
  border-radius: 1rem;
  border: 1px solid #b4b4b4;
  cursor: text;
  box-shadow: ${theme.primaryShadow};

  &:hover {
    outline: 1px solid ${theme.color.black};
  }

  &:active,
  &:focus {
    outline: 2px solid ${theme.color.primaryYellow};
  }
`;

export const StyledInput = styled.input`
  ${commonStyles}

  padding: 0 1rem;
  height: 4.5rem;
`;

export const StyledTextarea = styled.textarea`
  ${commonStyles}

  padding: 1rem;
  height: 18rem;
`;

export const SvgSpan = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-60%, 30%);
`;
