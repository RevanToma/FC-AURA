import styled from "styled-components";
import { theme } from "../../theme/Theme";

export const UserCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  position: relative;
  padding: 1rem;
  margin-top: 2rem;
  width: 32rem;
  min-height: 40rem;
  max-height: 50rem;

  border-bottom: 20px ${theme.color.primaryYellow} solid;

  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 50px;

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

  gap: 1rem;

  p {
    color: ${theme.color.primaryYellow};
  }
`;

export const UserHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Userimg = styled.img`
  width: 100%;

  height: 13rem;
`;
