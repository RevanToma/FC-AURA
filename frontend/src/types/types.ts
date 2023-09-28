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
