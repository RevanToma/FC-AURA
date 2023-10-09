import mongoose, { Schema } from "mongoose";
import { Message, Reaction } from "../types";

const reactionSchema = new Schema<Reaction>({
  emoji: String,

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const messageSchema = new Schema<Message>({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  time: {
    type: String,
  },
  reactions: [reactionSchema],
});

export default messageSchema;
