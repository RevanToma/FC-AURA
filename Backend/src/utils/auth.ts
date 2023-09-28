import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import User, { UserDocument } from "../models/userModel";
import { ResolverArgs } from "./../types";
import { Request } from "express";
interface DecodedJwt extends JwtPayload {
  id: string;
}

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
  const { res } = context;

  const user = await User.findOne({ email }).select("+password");

  if (
    !user ||
    !user.password ||
    !(await user.correctPassword(password!, user.password))
  ) {
    throw new Error("Incorrect email or password");
  }

  const token = signToken(user.id);

  const days = parseInt(process.env.JWT_EXPIRES_IN!);
  const milliseconds = days * 24 * 60 * 60 * 1000;

  res.cookie("authToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    maxAge: milliseconds,
    sameSite: "strict",
  });
  return {
    status: "success",
    token,
    user,
  };
};

export const decodeToken = async (token: string): Promise<DecodedJwt> => {
  const secret = process.env.JWT_SECRET as Secret;

  const verifyJwt = (
    token: string,
    secret: Secret
  ): Promise<string | JwtPayload> => {
    return new Promise((resolve) => {
      const decoded = jwt.verify(token, secret);
      resolve(decoded);
    });
  };

  const decoded = (await verifyJwt(token, secret)) as DecodedJwt;
  return decoded;
};

export const getCurrentUserFromContext = async (context: { req: Request }) => {
  const cookieString = context.req.headers.cookie; // or wherever you store your token
  const token = extractTokenFromCookie(cookieString);

  if (!token) {
    return null; // No user is authenticated if there's no token
  }

  try {
    const decoded = await decodeToken(token);

    // Assuming the decoded JWT payload has a userId property
    const userId = decoded.id;

    if (!userId) {
      return null;
    }

    // Fetch the user based on the userId from the decoded token
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

function extractTokenFromCookie(cookie: string | undefined): string | null {
  if (!cookie) return null;
  const authToken = cookie
    .split(";")
    .find((c) => c.trim().startsWith("authToken="));
  if (!authToken) return null;
  return authToken.split("=")[1];
}
