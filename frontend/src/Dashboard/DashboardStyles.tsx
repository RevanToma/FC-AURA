import styled from "styled-components";
import { theme } from "../theme/Theme";

export const StatusIndicator = styled.span<{
  $status: "Rejected" | "Pending" | "Accepted";
}>`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  transform: translate(-30%, 50%);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ $status }) => {
    switch ($status) {
      case "Rejected":
        return "red";
      case "Pending":
        return "yellow";

      case "Accepted":
        return "green";
      default:
        return "transparent";
    }
  }};
  box-shadow: ${({ $status }) => {
    switch ($status) {
      case "Rejected":
        return "0 0 10px red";
      case "Pending":
        return "0 0 10px yellow";
      case "Accepted":
        return "0 0 10px green";
      default:
        return "none";
    }
  }};

  margin-right: 5px;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 1rem;

  h1 {
    ${theme.h1}
    color: white;
  }
`;

export const DashboardBtnDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  button {
    padding: 1rem 0.5rem;
  }
`;

export const DashBoardTable = styled.div`
  position: relative;
  box-shadow: ${theme.primaryShadow};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 5px;
  h4 {
    ${theme.h6}
    color: white;
  }
  p {
    color: ${theme.color.primaryYellow};
    ${theme.label}
  }
  button {
    height: 4rem;
  }
`;

export const ConfirmDiv = styled.div`
  position: fixed;

  top: 20%;
  text-align: center;
  min-height: 25rem;

  background-color: #323232;
  box-shadow: ${theme.primaryShadow};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 2rem;
  border-radius: 5px;

  z-index: 100;

  button {
    width: 10rem;
    height: 5rem;
  }

  h4 {
    ${theme.h6}
    color: white;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;

  display: flex;
  justify-content: center;
`;
