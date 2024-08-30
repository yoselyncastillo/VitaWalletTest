import axios from "axios";

export const API_URL = "https://api.qa.vitawallet.io/api/";

export const VitaApi = axios.create({
  baseURL: API_URL,
  headers: {
    "app-name": "ANGIE",
  },
});
