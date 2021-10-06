import axios from "axios";
import { base_api_url } from "./config";

function getToken() {
  let token = "";
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));

  if (userInfo) {
    token = userInfo?.token;
  }

  return token;
}

let token = getToken();

const instance = axios.create({
  baseURL: base_api_url,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default instance;
