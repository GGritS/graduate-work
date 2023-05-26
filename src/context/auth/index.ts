import { User } from "firebase/auth";
import { ReactNode } from "react";

export type AuthContextProviderTypes = {
  user: User;
};

export type AuthContextProviderProps = {
  children: ReactNode;
};
