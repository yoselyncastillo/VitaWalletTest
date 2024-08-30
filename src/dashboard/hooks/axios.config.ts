import axios from "axios";

export const VitaApi = axios.create({
  baseURL: "https://api.qa.vitawallet.io/api/",
});


