import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_MESSAGES, SEND_MESSAGE } from "../../Mutations/Mutations";
import { IoIosSend } from "react-icons/io";
import Button from "../../components/common/Button/Button";
import { ButtonType } from "../../components/common/Button/ButtonTypes";

function MessageInput() {
  const [sendMessage, { error, loading }] = useMutation(SEND_MESSAGE, {
    refetchQueries: [{ query: GET_MESSAGES }],
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) return;

    try {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false, // Use 24-hour format
      });
      const response = await sendMessage({
        variables: { content: message, createdAt: currentTime },
      });
      if (response.data) {
        setMessage("");
      }
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Skriv ditt medelande..."
          />
          <Button
            buttontypes={ButtonType.Skills}
            iconLeft={<IoIosSend color="white" size={30} />}
          ></Button>
        </div>
      </form>

      {loading && <p>Sending...</p>}
      {error && <p>Error: {error.message}</p>}
    </>
  );
}

export default MessageInput;
