import jwt from "jsonwebtoken";
import User from "../models/userModel";
import { ResolverArgs } from "./../types";

export const signToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const login = async (
  parent: any,
  args: ResolverArgs,
  context: any,
  info: any
) => {
  const { email, password } = args.input;

  const user = await User.findOne({ email }).select("+password");
  console.log(user);

  if (
    !user ||
    !user.password ||
    !(await user.correctPassword(password!, user.password))
  ) {
    throw new Error("Incorrect email or password");
  }

  const token = signToken(user.id);

  return {
    status: "success",
    token,
    user,
  };
};
