import { useQuery } from "@apollo/client";
import { GET_MESSAGES } from "../../Mutations/Mutations";
import { useAuth } from "../../context/auth/auth";
import { ChatLi, MsgContent } from "./ChatStyles";
import { useEffect, useRef } from "react";
import { MsgType } from "../../types/types";
import { PiSoccerBallThin } from "react-icons/pi";

function MessageList() {
  const lastMessageRef = useRef<HTMLLIElement | null>(null);

  const {
    data: messagesData,
    loading: messagesLoading,
    error: messagesError,
  } = useQuery(GET_MESSAGES);

  const auth = useAuth();
  const userId = auth.user?.id;
  console.log(auth.user?.image);
  const userImg = auth.user?.image;
  console.log(messagesData);
  console.log(messagesData?.chatMessages[40].sender.id);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messagesData]);

  if (!messagesData) return <p>No messages</p>;
  if (messagesLoading) return <p>Loading messages...</p>;
  if (messagesError)
    return <p>Error loading messages: {messagesError.message}</p>;

  return (
    <ul>
      {messagesData?.chatMessages.map((msg: MsgType, index: number) => {
        const isSentByMe = msg.sender.id === userId;
        const isLastMessage = index === messagesData.chatMessages.length - 1;

        return (
          <ChatLi
            key={index}
            $isSentByMe={isSentByMe}
            ref={isLastMessage ? lastMessageRef : null}
          >
            <span>{msg.sender.name}: </span>
            <MsgContent>
              {userImg && isSentByMe ? (
                <img
                  src={process.env.REACT_APP_IMAGE + userImg}
                  alt="userimg"
                />
              ) : (
                <PiSoccerBallThin size={10} />
              )}

              {msg.content}
              <span className="time">{msg.time}</span>
            </MsgContent>
          </ChatLi>
        );
      })}
    </ul>
  );
}

export default MessageList;
