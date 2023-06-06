import { createContext, FC, useContext, useEffect, useState } from "react";
import {
  AuthContextProviderProps,
  AuthContextProviderTypes,
  UserLoginFields,
} from ".";
import {
  onAuthStateChanged,
  User,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext<AuthContextProviderTypes>(
  {} as AuthContextProviderTypes
);

export const AuthContextProvider: FC<AuthContextProviderProps> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({} as User);
  const [isUserLogined, setIsUserLogined] = useState<boolean>(false);
  const [isDataFetched, setIsDataFetching] = useState<boolean>(false);

  // eslint-disable-next-line
  const [loginError, setError] = useState<any>();

  const handleLogin = async (userLoginData: UserLoginFields) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        userLoginData.email,
        userLoginData.password
      );
      navigate("/");
      // eslint-disable-next-line
    } catch (error: any) {
      error.message && setError(error.message);
      console.log(error.message);

      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };
  
  const handleLogOut = () => {
    signOut(auth);
  };


  useEffect(() => {
    setIsDataFetching(false);
    const unlisten = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
        setIsUserLogined(true);
        setIsDataFetching(true);
      } else {
        setIsUserLogined(false);
        setIsDataFetching(true);
        setUser({} as User);
      }
    });
    return () => {
      unlisten();
    };
  }, []);

  const value: AuthContextProviderTypes = {
    user,
    isUserLogined,
    loginError,
    handleLogOut,
    isDataFetched,
    handleLogin,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line
export const useAuthContext = () => {
  return useContext(AuthContext);
};
