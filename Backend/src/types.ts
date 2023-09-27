import { ReadStream } from "fs";
import jwt from "jsonwebtoken";

export interface UpdateUserInput {
  id: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
  weight?: number;
  length?: number;
  instagram?: string;
  bio?: string;
  skills?: string[];
}
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

// interface Request extends ExpressRequest {
//   headers: {
//     authorization?: string;
//   };
// }
export interface ApolloContext {
  req: any;
  res: any;
  user?: string | jwt.JwtPayload; // Add this line
}
