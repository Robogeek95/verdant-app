import axios from "axios";
import { base_api_url } from "./config";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODEwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5MTkxOTI5MywiZXhwIjoxNjI3OTE5MjkzLCJuYmYiOjE1OTE5MTkyOTMsImp0aSI6InRmdjZWbGh2U2J2TVlSVjMiLCJzdWIiOjMsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJpZCI6M30.6jD56H0ZcFRVHIqla5KZv_soGbxSM4Y1GW14Rl4VNWU";

const instance = axios.create({
  baseURL: base_api_url,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default instance;
