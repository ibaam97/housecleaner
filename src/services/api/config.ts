import axios from "axios";
import { BASE_URL } from "@constants/URLS";
import { PaginatedListPayload } from "@interfaces/PaginatedListPayload";
import { API } from "aws-amplify";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

export const defaultPaginatedList: PaginatedListPayload = {
  limit: 20,
  page: 1,
};

export const restRequest = async (
  type: "post" | "get" | "put" | "del",
  apiname: string,
  route: string,
  body?
) => {
  return API[type](apiname, route, {
    headers: {
      Authorization: await getToken(),
    },
    body,
  });
};

export default api;
