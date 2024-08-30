import axios from "axios";
import { LoginResponse } from "../interfaces/loginResponse";
import { UserdataProp, HeadersProps } from "../interfaces/interfaces";

const VitaApi = axios.create({
  baseURL: "https://api.qa.vitawallet.io/api/",
  headers: {
    "app-name": "ANGIE",
  },
});

export interface LoginServiceResponse {
  userdata: UserdataProp;
  headers: HeadersProps;
}

export const loginAPI = async (
  email: string,
  password: string
): Promise<LoginServiceResponse | undefined> => {
  try {
    const { data, headers } = await VitaApi.post<LoginResponse>(
      "auth/sign_in",
      {
        email: email,
        password: password,
        dev_mode: "true",
      }
    );

    const userdata: UserdataProp = {
      first_name: data.data.attributes.first_name,
    };

    return {
      userdata: userdata,
      headers: {
        access_token: headers["access-token"],
        client: headers.client,
        expiry: headers.expiry,
        uid: headers.uid,
      },
    };
  } catch (error) {}
};
