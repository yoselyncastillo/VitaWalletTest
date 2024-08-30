import { useContext } from "react";
import { VitaApi } from "../hooks/axios.config";
import { ProfileProps } from "../interfaces/Profile";
import { AuthContext } from "../../context";

export const getBalanceApi = async () => {
  const { headers } = useContext(AuthContext);
  try {
    const { data } = await VitaApi.get<ProfileProps>("/profile", {
      headers: {
        "app-name": "ANGIE",
        "access-token": headers!.access_token,
        client: headers!.client,
        expiry: headers!.expiry,
        uid: headers!.uid,
      },
    });
    return data.data?.attributes.balances;
  } catch (error) {
  }
};
