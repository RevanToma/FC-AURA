import styled from "styled-components";
import { theme } from "../../../theme/Theme";

export const ImageContainer = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  position: relative;

  align-items: center;
  justify-content: center;

  height: 15rem;
  aspect-ratio: 1 / 1;

  border-radius: 50%;
  overflow: hidden;
  border: 1px ${theme.color.primaryYellow} solid;
  cursor: pointer;

  img {
    width: 100%;
  }

  .custom-file-upload {
    position: absolute;
    padding: 6px 12px;
    cursor: pointer;
    border: 1px solid #ccc;
    background-color: ${theme.color.primaryYellow};
    border-radius: 4px;
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