import { createContext } from "react";

type AuthContextType = {
  userdata?: {
    first_name: string;
  };
  logged?: boolean;
  headers?: {
    access_token: string;
    client: string;
    expiry: string;
    uid: string;
  };
  login: (email: string, password: string) => void;
  logout: () => void;
};

export const AuthContext = createContext({} as AuthContextType); //tipar correctamente
