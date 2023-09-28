import styled, { css } from "styled-components";
import { theme } from "../../../theme//Theme";

const largeSpinner = css`
  height: 8.6rem;
  width: 8.6rem;
  border-top: 12px solid ${theme.color.primaryGreen};
  border-right: 12px solid ${theme.color.primaryGreen};
  border-bottom: 12px solid transparent;
`;

const defaultSpinner = css`
  height: 3.6rem;
  width: 3.6rem;
  border-top: 3px solid #000;
  border-right: 3px solid transparent;
`;

interface ISpinnerContainerProps {
  size: string;
}

export const SpinnerContainer = styled.div<ISpinnerContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 0 auto;
  padding-top: 20rem;
  div {
    ${({ size }) => (size === "large" ? largeSpinner : defaultSpinner)}
    border-radius: 50%;
    animation: rotation 0.8s linear infinite;

    @keyframes rotation {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

export const StyledSpinner = styled.div`
  height: 3.6rem;
  width: 3.6rem;
  border-top: 3px solid #000;
  border-right: 3px solid transparent;
  border-radius: 50%;
  animation: rotation 0.8s linear infinite;

  @keyframes rotation {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
