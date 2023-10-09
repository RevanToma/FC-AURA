import EmojiPicker from "emoji-picker-react";

const Emoji = (select: any) => {
  return <EmojiPicker onEmojiClick={select} />;
};

export default Emoji;
