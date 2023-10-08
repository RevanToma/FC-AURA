import mongoose, { Schema } from "mongoose";
import messageSchema from "./messageModel";

export interface ChatDocument extends Document {
  id: string;
  messages: {
    sender: { type: mongoose.Schema.Types.ObjectId; ref: "User" };
    content: string;
    createdAt: Date;
    time: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

const chatSchema = new Schema<ChatDocument>(
  {
    messages: [messageSchema],
  },

  { timestamps: true }
);

const Chat = mongoose.model<ChatDocument>("Chat", chatSchema);
export default Chat;
