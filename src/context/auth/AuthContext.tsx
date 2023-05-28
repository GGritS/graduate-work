import {
  createContext,
  FC,
  SyntheticEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  AuthContextProviderProps,
  AuthContextProviderTypes,
  UserLoginFields,
} from ".";
import {
  onAuthStateChanged,
  User,
  createUserWithEmailAndPassword,
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

  const [loginError, setError] = useState<any>();

  const handleLogin = async (userLoginData: UserLoginFields) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        userLoginData.email,
        userLoginData.password
      );
      navigate("/");
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
    const unlisten = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
        setIsUserLogined(true);
      } else {
        setIsUserLogined(false);
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
    handleLogin,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
