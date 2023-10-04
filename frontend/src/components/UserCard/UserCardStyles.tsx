import styled from "styled-components";
import { theme } from "../../theme/Theme";

export const UserCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  position: relative;
  padding: 2rem;
  margin-top: 2rem;
  width: 100%;
  max-width: 32rem;
  border-bottom: 20px ${theme.color.primaryYellow} solid;

  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 50px;

  svg {
    font-size: 10rem;
    border: 1px ${theme.color.primaryYellow} solid;
    border-radius: 50%;
    margin-bottom: 2rem;
  }
  img:not(.userimg) {
    width: 6rem;
    align-self: flex-start;
    padding: 0.5rem;
  }

  h4 {
    ${theme.h1}
    color: white;
  }

  h6 {
    ${theme.h6}
    color: ${theme.color.primaryYellow};
    font-size: 1.8rem;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 2rem;
    margin-bottom: 3rem;
    li {
      color: white;
      box-shadow: ${theme.primaryShadow};
      padding: 0.5rem;
      border-radius: 10px;
      background: ${theme.color.primarySettingsColor};
    }
  }
`;

export const UserCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  p {
    color: white;
  }
`;

export const UserProp = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1rem;
  gap: 1rem;

  p {
    color: ${theme.color.primaryYellow};
  }
`;

export const UserHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 1rem;

  p {
    word-break: break-all;
    overflow-wrap: break-word;
  }
`;

export const Userimg = styled.img`
  width: 100%;
`;

export const UserImgDiv = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  border-radius: 50%;
  margin-bottom: 2rem;

  border: 1px ${theme.color.primaryYellow} solid;

  img {
    object-fit: fill;
    border-radius: 50%;
  }
`;
