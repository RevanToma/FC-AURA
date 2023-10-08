import { useQuery } from "@apollo/client";
import { GET_MESSAGES } from "../../Mutations/Mutations";
import { useAuth } from "../../context/auth/auth";
import { ChatLi, MsgContent } from "./ChatStyles";
import { useEffect, useRef } from "react";

function MessageList() {
  const lastMessageRef = useRef<HTMLLIElement | null>(null);

  const {
    data: messagesData,
    loading: messagesLoading,
    error: messagesError,
  } = useQuery(GET_MESSAGES);

  const auth = useAuth();
  const userId = auth.user?.id;

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
      {messagesData?.chatMessages.map((msg: any, index: number) => {
        const isSentByMe = msg.sender.id === userId;
        const isLastMessage = index === messagesData.chatMessages.length - 1;

        return (
          <ChatLi
            key={msg.id}
            $isSentByMe={isSentByMe}
            ref={isLastMessage ? lastMessageRef : null}
          >
            <span>{msg.sender.name}: </span>
            <MsgContent>
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
