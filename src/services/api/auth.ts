import axios from "axios";
import api from "./config";

export const signIn = (payload) => {
  return api.post(`/api/auth/signin`, payload);
};

export const setToken = (token) => {
  api.defaults.headers.common["Authorization"] = token;
  return Promise.resolve();
};

export const getUserProfile = () => {
  return api.get("/api/users/profile");
};
