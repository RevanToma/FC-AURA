import { createWriteStream } from "fs";
import User, { UserDocument } from "../../../models/userModel";
import {
  MyGraphQLContext,
  SendMessageArgs,
  UpdateUserInput,
} from "../../../types";
import {
  getCurrentUserFromContext,
  login,
  setTokenInCookie,
  signToken,
} from "../../../utils/auth";
import { catchAsyncResolver } from "../../../utils/catchAsync";
import path from "path";
import fs from "fs";
import bcrypt from "bcryptjs";
import Chat from "../../../models/chatModel";

// ... your other code ...

const UserResolvers = {
  Query: {
    chatMessages: async (
      _parent: any,
      _args: any,
      _context: any,
      _info: any
    ) => {
      const chatRoom = await Chat.findOne({})
        .populate("messages.sender")
        .exec(); // Assumes there's only one chat room for simplicity
      if (!chatRoom) {
        throw new Error("Chat room not found!");
      }

      return chatRoom.messages;
    },
    // ... (other query resolvers)
    getUser: async (
      _parent: any,
      args: UserDocument,
      _context: any,
      _info: any
    ) => {
      // For demonstration purposes, let's fetch a user by id
      const user = await User.findById(args.id);
      return user;
    },
    users: async (
      _parent: any,
      args: { offset: number; limit: number },
      _context: any,
      _info: any
    ) => {
      const users = await User.find().skip(args.offset).limit(args.limit);
      return users;
    },
    teamMembers: async (
      _parent: any,
      _args: any,
      context: MyGraphQLContext,
      _info: any
    ) => {
      const user = await getCurrentUserFromContext(
        context?.req.headers.authorization!
      );

      if (!user) {
        throw new Error("Not authenticated");
      }

      const teamMembers = await User.find({ teamMember: true });
      return teamMembers;
    },
    me: async (
      _parent: any,
      _args: any,
      context: MyGraphQLContext,
      _info: any
    ) => {
      // Assuming you have a function or method to get the current user from the context

      const user = await getCurrentUserFromContext(
        context?.req.headers.cookie!
      );

      if (!user) {
        throw new Error("Not authenticated");
      }

      return user;
    },
  },
  Mutation: {
    createChatRoom: async (_: any, __: any, _context: any) => {
      const existingChat = await Chat.findOne();
      if (existingChat) {
        throw new Error("Chat room already exists");
      }
      const newChat = new Chat();
      await newChat.save();
      return newChat;
    },
    sendMessage: async (
      _1: any,
      args: SendMessageArgs,
      context: MyGraphQLContext,
      _info: any
    ) => {
      const user = await getCurrentUserFromContext(
        context?.req.headers.cookie!
      );

      if (!user || !user.teamMember) {
        throw new Error("Not authenticated");
      }
      const chatRoom = await Chat.findOne({});

      if (!chatRoom) {
        throw new Error("Chat room not found!");
      }
      const { content, createdAt } = args;

      const message = {
        content,
        sender: user?.id,
        createdAt: new Date(),
        time: createdAt,
      };

      chatRoom.messages.push(message);
      await chatRoom.save();

      return message;
    },
    updateUserRegistrationStatus: async (
      _1: any,
      args: { input: { registrationStatus: string; id: string } },
      context: MyGraphQLContext,
      _: any
    ) => {
      const userId = await getCurrentUserFromContext(
        context.req.headers.cookie!
      );
      const userIsAdmin = await User.findById(userId).select("role");

      if (!userId || userIsAdmin?.role !== "admin") {
        throw new Error("User not authenticated!");
      }
      const { registrationStatus, id } = args.input;
      const user = await User.findByIdAndUpdate(
        id,
        { registrationStatus },
        { new: true }
      );
      return user;
    },
    uploadFile: catchAsyncResolver(
      async (_: any, args: any, context: MyGraphQLContext) => {
        const userId = await getCurrentUserFromContext(
          context.req.headers.cookie!
        );

        if (!userId) {
          throw new Error("User not authenticated!");
        }

        const mime = args.file.split(";base64,")[0].split(":")[1] as MimeTypes;

        type MimeTypes = "image/png" | "image/jpeg" | "image/svg+xml"; // Add more as required

        const extensionMap: Record<MimeTypes, string> = {
          "image/png": ".png",
          "image/jpeg": ".jpg",
          "image/svg+xml": ".svg",
          // ... add other mime types and their extensions as needed
        };
        const extension = extensionMap[mime] || ".png"; // get the file extension using the mime type

        const base64Image = args.file.split(";base64,").pop();

        const filename = `image-${Date.now()}${extension}`;
        const targetDir = path.join(
          __dirname,
          "..",
          "..",
          "..",
          "..",
          "photos"
        );
        const filePath = path.join(targetDir, filename);

        const relativePath = `/photos/${filename}`;

        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }

        fs.writeFileSync(filePath, base64Image, {
          encoding: "base64",
        });

        const updatedUser = await User.findByIdAndUpdate(
          userId,
          { image: relativePath }, // assuming you want to save the path and not the base64 string
          { new: true }
        );

        return !!updatedUser; // will return true if user was updated, false otherwise
      }
    ),
    updateUser: catchAsyncResolver(
      async (
        _parent: any,
        args: { input: UpdateUserInput },
        context: MyGraphQLContext,
        _info: any
      ) => {
        const { input } = args;

        const existingUser = await User.findOne({ email: input.email });

        const tokenString = context.req.headers.cookie;
        if (!tokenString) {
          throw new Error("Authentication token is missing!");
        }

        const user = await getCurrentUserFromContext(tokenString);
        if (!user || !user.id) {
          throw new Error("Invalid token or token has expired.");
        }

        if (input.image) {
          user.image = input.image;
        }
        if (input.password) {
          input.password = await bcrypt.hash(input.password, 12);
        }
        if (existingUser) {
          throw new Error("Email används redan");
        }

        const updatedUser = await User.findByIdAndUpdate(
          user.id, // use the ID from the token

          { ...input },

          { new: true } // This option returns the updated document
        );

        if (!updatedUser) {
          throw new Error("User not found");
        }

        return updatedUser;
      }
    ),

    logout: (parent: any, args: any, context: any, info: any) => {
      context.res.clearCookie("authToken", "", { expires: new Date(0) });
      return true;
    },
    loginUser: login,
    createUser: catchAsyncResolver(
      async (
        _parent: any,
        args: { input: UserDocument },
        context: MyGraphQLContext,
        _info: any
      ) => {
        const { res } = context;

        const {
          input: {
            name,
            lastName,
            email,
            password,
            passwordConfirm,
            weight,
            length,
            instagram,
            method,
            googleId,
            position,
            bio,
            skills,
            teamMember,
            image,
            role = "user",
          },
        } = args;

        const user = await User.create({
          name,
          lastName,
          email,
          password,
          passwordConfirm,
          weight,
          length,
          instagram,
          method: method || "password",
          googleId,
          position,
          bio,
          skills,
          teamMember,
          image,
          role,
        });
        const token = signToken(user._id.toString());
        setTokenInCookie(res, token);

        return {
          status: "success",
          user,
          token,
        };
      }
    ),
  },
};

export default UserResolvers;
