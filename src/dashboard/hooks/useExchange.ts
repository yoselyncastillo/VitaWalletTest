import { useContext, useEffect, useState } from "react";
import { VitaApi } from "./axios.config";
import { AuthContext } from "../../context";
import { useForm } from "react-hook-form";

// export const useExchange = async (
//   currency_sent: string,
//   currency_received: string,
//   amount_sent: number
// ) => {
//   const { headers } = useContext(AuthContext);
//   try {
//     const { data } = await VitaApi.post<any>(
//       "/transactions/exchange",
//       {
//         currency_sent: currency_sent,
//         currency_received: currency_received,
//         amount_sent: amount_sent,
//       },
//       {
//         headers: {
//           "app-name": "ANGIE",
//           "access-token": headers!.access_token,
//           client: headers!.client,
//           expiry: headers!.expiry,
//           uid: headers!.uid,
//         },
//       }
//     );
//     return data;
//   } catch (error) {}
// };

export const useExchange = (prices: {
  [key: string]: {
    [key: string]: number;
  };
}) => {
  const { register, handleSubmit, watch, setValue, control } = useForm({
    defaultValues: {
      currency_sent: "usd",
      amount_sent: "0",
      currency_received: "btc",
      amount_received: "0",
    },
  });

  const [priceInUse, setPriceInUse] = useState<{ [key: string]: number }>(
    prices[0]
  );

  const [focusedInput, setFocusedInput] = useState("null");

  const currency_sent = watch("currency_sent");
  const currency_received = watch("currency_received");
  const amount_sent = watch("amount_sent");
  const amount_received = watch("amount_received");

  useEffect(() => {
    setPriceInUse(prices[currency_sent]);
  }, []);

  useEffect(() => {
    setPriceInUse(prices[currency_sent]);
  }, [prices, currency_sent]);

  useEffect(() => {
    setValue("amount_sent", "0");
  }, [currency_sent]);

  useEffect(() => {
    setValue("amount_received", "0");
  }, [currency_received]);

  useEffect(() => {
    if (priceInUse && amount_sent && focusedInput === "amount_sent") {
      const recibir = parseFloat(amount_sent) * priceInUse[currency_received];
      setValue("amount_received", recibir.toString());
    }
  }, [amount_sent]);

  useEffect(() => {
    if (priceInUse && amount_sent) {
      const intercambiar =
        parseFloat(amount_received) / priceInUse[currency_received];
      setValue("amount_sent", intercambiar.toString());
    }
  }, [amount_received]);

  const formValues = watch()

  return {
    register,
    handleSubmit,
    setValue,
    control,
    currency_sent,
    currency_received,
    amount_sent,
    amount_received,
    formValues
  };
};
