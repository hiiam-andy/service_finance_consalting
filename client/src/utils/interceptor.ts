import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { BASE_URL } from "./constats";

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders
}

export const $authHost = axios.create({
  baseURL: BASE_URL
});

$authHost.interceptors.request.use(
  (config): AdaptAxiosRequestConfig => {
    return config;
  },
  (error): any => {
    return Promise.reject(error);
  }
);
