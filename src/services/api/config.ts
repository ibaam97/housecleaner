import axios from "axios";
import { BASE_URL } from "@constants/URLS";
import { PaginatedListPayload } from "@interfaces/PaginatedListPayload";

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

export default api;
