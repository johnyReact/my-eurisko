import axios from "axios";

export const key = "Bearer " + localStorage.getItem("token");
let API = "http://34.245.213.76:3000";
export let api = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
});

// Set the AUTH token for any request
api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
