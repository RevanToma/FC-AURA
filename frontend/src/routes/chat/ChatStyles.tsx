import styled from "styled-components";
import { theme } from "../../theme/Theme";

export const ChatContainer = styled.div`
  background-color: #343541;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-bottom: 3rem;
  width: 100%;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.1rem;
  color: white;

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5rem;
  }
`;

export const Header = styled.div`
  display: flex;
  position: fixed;
  background: #343541;
  z-index: 1;

  gap: 8rem;
  width: 100%;
  height: 5rem;
  background-color: #343541;
  box-shadow: ${theme.primaryShadow};

  padding: 0.5rem;
`;

export const ChatLi = styled.li<{ $isSentByMe: boolean }>`
  background-color: ${({ $isSentByMe }: { $isSentByMe: boolean }) =>
    $isSentByMe ? "rgba(3,64,3,0.4)" : "#343541"};
  border-radius: 1rem;

  align-self: ${({ $isSentByMe }) => ($isSentByMe ? "flex-end" : "flex-start")};

  width: fit-content;
  box-shadow: ${theme.primaryShadow};

  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 35rem;
`;

export const MessageInDiv = styled.div`
  position: fixed;
  height: 81vh;
  width: 100%;
  margin-top: 7.4rem;

  form {
    position: absolute;
    background-color: #343541;

    bottom: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      justify-content: space-between;

      position: relative;
      width: 100%;
      padding-top: 2rem;
      padding-bottom: 2rem;
      button {
        position: relative;
        background: none;
        box-shadow: none;

        svg {
          position: absolute;
          top: 0;
          left: 0;
          transform: translate(50%, 20%);
        }
      }

      textarea {
        width: 30rem;
        word-wrap: break-word;
        display: flex;
        flex-direction: column;
        resize: none;
        outline: none;
        color: white;
        background: none;
        padding: 0rem 1rem;
        border: none;
        box-shadow: ${theme.primaryShadow};
        flex: 1;
        border-radius: 1rem;
      }
    }
    svg {
      background: #0f34f7;
      border-radius: 50%;
      padding: 0.5rem;
      position: absolute;
      right: 0;
    }
  }
`;

export const MsgContent = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  position: relative;

  .time {
    font-size: 1rem;
    align-self: end;
  }
`;
