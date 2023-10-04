import { ReadStream } from "fs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

export interface UpdateUserInput {
  email?: string;
  password?: string;
  passwordConfirm?: string;
  weight?: number;
  length?: number;
  instagram?: string;
  bio?: string;
  skills?: string[];
  image?: string;
}

export type LoginInput = {
  email: string;
  password: string;
};
export type ResolverArgs = {
  input: LoginInput;
};

export interface INumberObject {
  [key: string]: number | undefined;
}
export type FileUpload = {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => ReadStream;
};

export interface IPostReqBody {
  frontImageArray: string;
  imgUrls: string[];
  itemCount: string;
  title: string;
  description: string;
  sizes: string[];
  group: string;
  typeOfItems: string[];
  condition: string;
  images: File[];
  id?: string;
}

export interface ApolloContext {
  req: any;
  res: any;
  user?: string | jwt.JwtPayload;
}

export interface MyGraphQLContext {
  req: Request;
  res: Response;
}
