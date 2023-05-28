import { User } from "firebase/auth";
import { ReactNode } from "react";

export type AuthContextProviderTypes = {
  user: User;
  isUserLogined: boolean;
  loginError: string | undefined;
  handleLogOut: () => void;
  handleLogin: (userLoginData: UserLoginFields) => void;
};

export type AuthContextProviderProps = {
  children: ReactNode;
};

export type UserLoginFields = {
  email: string;
  password: string;
};
