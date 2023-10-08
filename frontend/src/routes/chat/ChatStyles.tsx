import styled from "styled-components";
import { theme } from "../../theme/Theme";

export const ChatContainer = styled.div`
  background-color: #343541;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.1rem;
  color: white;

  li {
    box-shadow: ${theme.primaryShadow};
    padding: 1rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5rem;
  }
`;

export const Line = styled.div`
  position: absolute;
  width: 20px;
  height: 3px;
  background-color: #6b6c7b;
  border-radius: 30px;

  .line.one {
    transform: rotate(45deg);
  }

  .line.two {
    transform: rotate(135deg);
  }
`;

export const MessageContainer = styled.div`
  background-color: green;
  width: 100%;
  height: 210px;

  input {
    outline: none;
    display: flex;
    border: none;
    background: none;
    height: 40px;
    width: 230px;
    border-radius: 7px;
    background: none;
    color: white;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-left: 5px;
  }
`;

export const SenderAreaDiv = styled.div`
  background-color: #343541;
  width: 100%;
  height: 70px;
  display: flex;
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  position: absolute;

  gap: 8rem;
  width: 100%;
  height: 5rem;
  background-color: #343541;
  box-shadow: ${theme.primaryShadow};

  padding: 0.5rem;
`;

export const ChatLi = styled.li<{ $isSentByMe: boolean }>`
  background: ${({ $isSentByMe }: { $isSentByMe: boolean }) =>
    $isSentByMe ? "#033f03" : "white"};
  border-radius: 1rem;

  align-self: ${({ $isSentByMe }) => ($isSentByMe ? "flex-end" : "flex-start")};

  width: fit-content;
`;

export const MessageInDiv = styled.div`
  position: relative;
  height: 80vh;
  width: 100%;

  form {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;
