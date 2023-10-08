import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_MESSAGES, SEND_MESSAGE } from "../../Mutations/Mutations";

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
        console.log(currentTime);
      }
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>

      {loading && <p>Sending...</p>}
      {error && <p>Error: {error.message}</p>}
    </>
  );
}

export default MessageInput;
