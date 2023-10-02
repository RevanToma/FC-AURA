import { ReactNode } from "react";
export type User = {
  id: string;
  name: string;
  email: string;
};

export type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};
export type AuthProviderProps = {
  children: ReactNode;
};

export enum InputType {
  email = "email",
  password = "password",
  passwordConfirm = "passwordConfirm",
  search = "search",
  firstName = "name",
  lastName = "lastName",
  text = "text",
  bio = "bio",
  skills = "skills",
  instagram = "instagram",
  weight = "weight",
  length = "length",
  textarea = "textarea",
  number = "number",
}

export type UpdateUserInput = {
  bio?: string;
  weight?: number;
  length?: number;
  instagram?: string;
};
