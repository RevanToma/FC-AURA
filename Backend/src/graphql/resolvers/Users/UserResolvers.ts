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
