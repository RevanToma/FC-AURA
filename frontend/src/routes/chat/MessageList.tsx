import { gql, useMutation, useQuery } from "@apollo/client";
import { GET_MESSAGES } from "../../Mutations/Mutations";
import { useAuth } from "../../context/auth/auth";
import { ChatLi, MsgContent } from "./ChatStyles";
import { useEffect, useRef, useState } from "react";
import { MsgType } from "../../types/types";
import { PiSoccerBallThin } from "react-icons/pi";
import EmojiPicker from "emoji-picker-react";

const REACT_MUTATION = gql`
  mutation AddReactionToMessage($messageId: ID!, $emoji: String!) {
    addReactionToMessage(messageId: $messageId, emoji: $emoji) {
      content
    }
  }
`;
function MessageList() {
  const lastMessageRef = useRef<HTMLLIElement | null>(null);
  const [reactToMsg] = useMutation(REACT_MUTATION);

  const {
    data: messagesData,
    loading: messagesLoading,
    error: messagesError,
  } = useQuery(GET_MESSAGES);
  const [activeMessageId, setActiveMessageId] = useState<string | null>(null);
  const auth = useAuth();

  const userImg = auth.user?.image;

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messagesData]);

  const userId = auth.user?.id;

  const handleEmojiIconClick = (messageId: string) => {
    setActiveMessageId((prevId) => (prevId === messageId ? null : messageId));
  };

  const handleEmojiSelect = (emoji: any, messageId: any) => {
    reactToMsg({
      variables: {
        messageId,
        emoji: emoji.emoji,
      },
      refetchQueries: [{ query: GET_MESSAGES }],
    });

    setActiveMessageId(null);
  };

  if (!messagesData) return <p>No messages</p>;
  if (messagesLoading) return <p>Loading messages...</p>;
  if (messagesError)
    return <p>Error loading messages: {messagesError.message}</p>;

  return (
    <ul>
      {messagesData?.chatMessages.map((msg: MsgType, index: number) => {
        const isSentByMe = msg.sender.id === userId;
        const isLastMessage = index === messagesData.chatMessages.length - 1;

        const aggregatedReactions: { [emoji: string]: number } = {};
        msg.reactions.forEach((reaction) => {
          if (aggregatedReactions[reaction.emoji]) {
            aggregatedReactions[reaction.emoji]++;
          } else {
            aggregatedReactions[reaction.emoji] = 1;
          }
        });

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
              <div className="reactions">
                {Object.entries(aggregatedReactions).map(([emoji, count]) => {
                  return (
                    <span key={emoji}>
                      {emoji}
                      {count > 1 && <sub>{count}</sub>}
                    </span>
                  );
                })}
              </div>
              <span
                onClick={() => handleEmojiIconClick(msg.id)}
                className="reactSpan"
              >
                ☺️
              </span>
              <span className="time">{msg.time}</span>
            </MsgContent>
            {activeMessageId === msg.id && (
              <EmojiPicker
                onEmojiClick={(emoji) => handleEmojiSelect(emoji, msg.id)}
              />
            )}
          </ChatLi>
        );
      })}
    </ul>
  );
}

export default MessageList;
