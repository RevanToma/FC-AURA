import styled from "styled-components";

type StatusProps = {
  status: "Rejected" | "Pending" | "Accepted";
};

export const StatusIndicator = styled.span<StatusProps>`
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    switch (status) {
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
  margin-right: 5px; // Add some space next to the name or any text
`;
