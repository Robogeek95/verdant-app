import axios from "axios";
import { base_api_url } from "./config";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMmQyYTdmMjVhZjk2ZTEzMGNlZDZkOCIsImVtYWlsIjoidGVlQGdtYWlsLmNvbSIsImV4cCI6MTYzMjI4MTgwOSwiaWF0IjoxNjMxNjc3MDA5fQ.Nw-uo7xq0Vx-fCIHNYx6NHcFUTShygXPIHKr1DI_80Q";

const instance = axios.create({
  baseURL: base_api_url,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default instance;
