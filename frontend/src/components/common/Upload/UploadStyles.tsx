import styled from "styled-components";
import { theme } from "../../../theme/Theme";

export const ImageContainer = styled.div`
  display: flex;

  border-radius: 50%;
  overflow: hidden;
  height: 18rem;
  width: 18rem;

  border: 1px ${theme.color.primaryYellow} solid;
  cursor: pointer;

  .inputNone {
    display: none;
  }

  svg {
    font-size: 16rem;
  }
  img {
    object-fit: cover;
  }

  .custom-file-upload {
    position: absolute;
    padding: 6px 12px;
    cursor: pointer;

    background-color: ${theme.color.primaryYellow};
    border-radius: 4px;
    color: white;
    background: ${theme.color.primarySettingsColor};
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  }
`;

export const LabelDiv = styled.div`
  background: ${theme.color.primarySettingsColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  padding: 1.5rem;
  width: 12rem;
  border-radius: 0.5rem;
  color: white;
  text-align: center;
`;
