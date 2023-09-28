import User, { UserDocument } from "../../../models/userModel";
import { UpdateUserInput } from "../../../types";
import {
  getCurrentUserFromContext,
  login,
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
    me: async (_parent: any, _args: any, context: any, _info: any) => {
      // Assuming you have a function or method to get the current user from the context

      const user = await getCurrentUserFromContext(context);

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
        _context: any,
        _info: any
      ) => {
        const { input } = args;

        if (input.password && input.passwordConfirm) {
          if (input.password !== input.passwordConfirm) {
            throw new Error("Passwords do not match!");
          }
        }

        const updatedUser = await User.findByIdAndUpdate(
          input.id,
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
        _context: any,
        _info: any
      ) => {
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
