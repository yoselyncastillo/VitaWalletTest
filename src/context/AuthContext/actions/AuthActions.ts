import { HeadersProps, UserdataProp } from "../interfaces/interfaces";

export type AuthAction =
  | {
      type: "login";
      payload: { logged: boolean; userdata: UserdataProp; headers: HeadersProps };
    }
  | { type: "logout" };