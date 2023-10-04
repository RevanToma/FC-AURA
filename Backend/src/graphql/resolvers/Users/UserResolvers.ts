import { createWriteStream } from "fs";
import User, { UserDocument } from "../../../models/userModel";
import { MyGraphQLContext, UpdateUserInput } from "../../../types";
import {
  decodeToken,
  getCurrentUserFromContext,
  login,
  setTokenInCookie,
  signToken,
} from "../../../utils/auth";
import { catchAsyncResolver } from "../../../utils/catchAsync";
import path from "path";
import fs from "fs";

const UserResolvers = {
  Query: {
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
      _args: any,
      context: UserDocument,
      _info: any
    ) => {
      const users = await User.find();
      return users;
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
    uploadFile: catchAsyncResolver(async (_: any, args: any, context: any) => {
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
      const targetDir = path.join(__dirname, "..", "..", "..", "..", "photos");
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
    }),
    updateUser: catchAsyncResolver(
      async (
        _parent: any,
        args: { input: UpdateUserInput },
        context: MyGraphQLContext,
        _info: any
      ) => {
        const { input } = args;

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
        context: any,
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
