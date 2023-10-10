import styled from "styled-components";
import { theme } from "../../theme/Theme";

export const ChatContainer = styled.div`
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
  background: #323232;

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5rem;
    gap: 2rem;
  }

  .reactSpan {
    position: absolute;
    transform: translate(-100%, -200%);
    font-size: 2rem;
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

  width: 100%;
  margin-top: 7.4rem;
  bottom: 4rem;
  transform: translateY(-20px);

  form {
    position: absolute;
    background: #323232;

    bottom: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-radius: 1rem 1rem 0 0;

    div {
      display: flex;
      justify-content: space-between;

      position: relative;
      width: 100%;
      padding-top: 2rem;
      padding-bottom: 2rem;
      border-radius: 5rem;
      button {
        position: relative;
        background: none;
        box-shadow: none;

        svg {
          position: absolute;
          top: 0;
          left: 0;
          transform: translate(50%);
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
  gap: 1em;
  align-items: center;
  position: relative;

  img {
    width: 2.5rem;
    border-radius: 50%;

    align-self: flex-start;
  }

  .time {
    font-size: 1rem;
    align-self: end;
  }

  .reactions {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    align-items: center;

    bottom: 0;
    transform: translate(0, 120%);
  }
  .reactions span {
    background: #323232;
    padding: 0.3rem;
    box-shadow: ${theme.primaryShadow};
    border-radius: 50%;

    display: flex;
    align-items: center;
  }
`;
