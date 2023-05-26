import { createContext, FC, useContext, useEffect, useState } from "react";
import { AuthContextProviderProps, AuthContextProviderTypes } from ".";
import {
  onAuthStateChanged,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext<AuthContextProviderTypes>(
  {} as AuthContextProviderTypes
);

export const AuthContextProvider: FC<AuthContextProviderProps> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({} as User);
  const [isUserLogined, setIsUserLogined] = useState<boolean>(false);

  const [isRegForm, setIsRegForm] = useState(false);
  const [regOrLoginError, setError] = useState<any>();

  // const [userData, setUserData] = useState<UserData>({
  //   email: "test@gmail.com",
  //   password: "123456",
  //   name: "",
  // } as UserData);

  // const addUser = async (newUser: User) => {
  //   const {
  //     uid,
  //     displayName,
  //     phoneNumber,
  //     photoURL,
  //     email,
  //     emailVerified,
  //     isAnonymous,
  //     providerId,
  //   } = newUser;
  //   try {
  //     await setDoc(doc(db, "users", uid), {
  //       uid,
  //       displayName,
  //       phoneNumber,
  //       photoURL,
  //       email,
  //       emailVerified,
  //       isAnonymous,
  //       metadata: {
  //         creationTime: newUser.metadata.creationTime,
  //         lastSignInTime: newUser.metadata.lastSignInTime,
  //       },
  //       providerId,
  //       subscribers: [],
  //       subscribed: [],
  //       dialogs: [],

  //       age: null,
  //       navigation: {
  //         country: null,
  //         city: null,
  //       },
  //       status: null,
  //     });
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // };

  // const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   try {
  //     if (isRegForm) {
  //       const res = await createUserWithEmailAndPassword(
  //         auth,
  //         userData.email,
  //         userData.password
  //       );
  //       await updateProfile(res.user, { displayName: userData.name });
  //       await addUser(res.user);
  //       navigate("/");
  //     } else {
  //       await signInWithEmailAndPassword(
  //         auth,
  //         userData.email,
  //         userData.password
  //       );
  //       navigate("/");
  //     }
  //   } catch (error: any) {
  //     error.message && setError(error.message);
  //     console.log(error.message);

  //     setTimeout(() => {
  //       setError(null);
  //     }, 3000);
  //   }
  //   setUserData({ email: "", password: "", name: "" });
  // };

  // useEffect(() => {
  //   const unlisten = onAuthStateChanged(auth, (authUser) => {
  //     if (authUser) {
  //       setUser(authUser);
  //       setIsUserLogined(true);
  //     } else {
  //       setIsUserLogined(false);
  //       setUser({} as User);
  //     }
  //   });
  //   return () => {
  //     unlisten();
  //   };
  // }, []);

  const value: AuthContextProviderTypes = {
    user,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
