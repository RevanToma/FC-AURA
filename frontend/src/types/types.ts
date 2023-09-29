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
}
