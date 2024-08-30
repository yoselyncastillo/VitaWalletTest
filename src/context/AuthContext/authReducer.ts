import { AuthAction } from "./actions/AuthActions";
import { AuthState } from "./interfaces/interfaces";

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {

  switch (action.type) {
    case "logout":
      return {
        ...state,
        logged: false,
      };

    case "login":
      return {
        ...state,
        userdata: action.payload.userdata,
        logged: true,
        headers: action.payload.headers,
      };

    default:
      return state;
  }
};
