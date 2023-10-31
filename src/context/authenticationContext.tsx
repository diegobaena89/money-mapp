import { ReactNode, createContext, useMemo, useState } from "react";

export interface Iuser {
  email: string;
  password: string;
  isAuthenticaded?: boolean;
  authUser?: string;
  setAuthUser?: (authUser: string) => void;
  setIsAuthenticaded?: (isAuthenticaded: boolean) => void;
  userName: string;
  setUserName: (userName: string) => void;
}

type AuthContextType = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  isAuthenticaded?: boolean;
  setIsAuthenticaded?: (isAuthenticaded: boolean) => void;
  authUser?: Iuser;
  setAuthUser?: (authUser: Iuser) => void;
  userName?: string;
  setUserName?: (userName: string) => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticaded, setIsAuthenticaded] = useState(false);
  const [authUser, setAuthUser] = useState({} as Iuser);
  const [userName, setUserName] = useState("");

  const contextValue: AuthContextType = useMemo(() => {
    return {
      email,
      setEmail,
      password,
      setPassword,
      isAuthenticaded,
      setIsAuthenticaded,
      authUser,
      setAuthUser,
      userName,
      setUserName,
    };
  }, [email, password, isAuthenticaded, authUser, userName, setUserName]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
