import { ReactNode, useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { AuthState } from "./interfaces/interfaces";
import { AuthAction } from "./actions/AuthActions";
import { loginAPI } from "./services/AuthService";
// import { authReducer } from "./authReducer";
// import { types } from "../types/types";
// import { loginAPI } from "../services/AuthService";

const init = () => {
  const userString = localStorage.getItem("userdata");
  const headersString = localStorage.getItem("headers");

  let user = null;
  let headers = null;

  if (userString) {
    user = JSON.parse(userString);
  }

  if (headersString) {
    headers = JSON.parse(headersString);
  }

  return {
    logged: !!user,
    userdata: user,
    headers: headers,
  };
};

const initialState: AuthState = {
  logged: false,
  headers: {
    access_token: "",
    client: "",
    expiry: "",
    uid: "",
  },
  userdata: {
    first_name: "",
  },
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState, init);

  useEffect(() => {
    const timeoutLogout = setTimeout(() => {
      logout();
    }, 600000); // 5min
    return () => clearTimeout(timeoutLogout);
  }, []);

  const login = async (email: string, password: string) => {
    const response = await loginAPI(email, password);

    if (response) {
      const payload = {
        headers: response.headers,
        userdata: response.userdata,
        logged: true,
      };

      const action: AuthAction = { type: "login", payload };
      localStorage.setItem("userdata", JSON.stringify(response.userdata));
      localStorage.setItem("headers", JSON.stringify(response.headers));

      dispatch(action);
    }
  };

  const logout = () => {
    localStorage.removeItem("userdata");
    const action: AuthAction = { type: "logout" };
    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        //Methods
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
