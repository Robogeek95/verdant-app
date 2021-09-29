import axios from "axios";
import { base_api_url } from "./config";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNGM0ZTRjNzE0ZDViZGQ3NDBlYzc3MSIsImVtYWlsIjoidGVlQGdtYWlsLmNvbSIsImV4cCI6MTYzMzQ2NjQyMywiaWF0IjoxNjMyODYxNjIzfQ.VB-otwbSZjvD1LRin7i1LH3_uL_Oluc-gCoryA8eH7U";

const instance = axios.create({
  baseURL: base_api_url,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default instance;
