import { useQuery } from "@apollo/client";
import { GET_MESSAGES } from "../../Mutations/Mutations";
import { useAuth } from "../../context/auth/auth";
import { ChatLi } from "./ChatStyles";

function MessageList() {
  const {
    data: messagesData,
    loading: messagesLoading,
    error: messagesError,
  } = useQuery(GET_MESSAGES);
  const auth = useAuth();
  const msgSentByMe =
    auth.user?.id === messagesData?.chatMessages[0]?.sender?.id || false;
  console.log(messagesData);

  if (!messagesData) return <p>No messages</p>;
  if (messagesLoading) return <p>Loading messages...</p>;
  if (messagesError)
    return <p>Error loading messages: {messagesError.message}</p>;

  return (
    <ul>
      {messagesData?.chatMessages.map((msg: any) => (
        <ChatLi key={msg.id} $isSentByMe={msgSentByMe}>
          <span>{msg.time}</span>
          <span>{msg.sender.name}: </span>

          {msg.content}
        </ChatLi>
      ))}
    </ul>
  );
}

export default MessageList;
