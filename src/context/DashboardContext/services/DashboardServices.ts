import { HeadersProps } from "../../AuthContext";
import { VitaApi } from "../../../utils/constants";
import { ProfileProps } from "../../../dashboard/interfaces/Profile";
import {
  Datum,
  TransactionsResponse,
} from "../interfaces/transactionsResponse";
import { PricesResponse } from "../interfaces/pricesResponse";

export type BalanceServiceResponse = { [key: string]: number } | undefined;

export const balanceApi = async (
  headers: HeadersProps
): Promise<BalanceServiceResponse | undefined> => {
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

    const balance: { [key: string]: number } | undefined =
      data.data?.attributes.balances;
    return balance;
  } catch (error) {}
};

export const historyApi = async (headers: HeadersProps) => {
  try {
    const { data } = await VitaApi.get<TransactionsResponse>("/transactions", {
      headers: {
        "app-name": "ANGIE",
        "access-token": headers!.access_token,
        client: headers!.client,
        expiry: headers!.expiry,
        uid: headers!.uid,
      },
    });

    const history: Datum[] = data.data;
    return history;
  } catch (error) {
  }

  return history;
};

export const pricesApi = async (headers: HeadersProps) => {
  try {
    const { data } = await VitaApi.get<PricesResponse>(
      "/users/get_crypto_multi_prices",
      {
        headers: {
          "app-name": "ANGIE",
          "access-token": headers!.access_token,
          client: headers!.client,
          expiry: headers!.expiry,
          uid: headers!.uid,
        },
      }
    );

    return {
      prices: data.prices,
      valid_until: new Date(data.valid_until),
    };
  } catch (error) {}
};

export const exchangeAPI = async (
  headers: HeadersProps,
  currency_sent: string,
  currency_received: string,
  amount_sent: number
): Promise<any | undefined> => {
  try {
    const { data } = await VitaApi.post<any>(
      "transactions/exchange",
      {
        currency_sent: currency_sent,
        currency_received: currency_received,
        amount_sent: amount_sent,
      },
      {
        headers: {
          "app-name": "ANGIE",
          "access-token": headers!.access_token,
          client: headers!.client,
          expiry: headers!.expiry,
          uid: headers!.uid,
        },
      }
    );

    return 'success';
  } catch (error:any) {
    return error.response.data.error;
  }
};
