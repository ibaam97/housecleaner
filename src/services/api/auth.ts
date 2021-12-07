import { Auth } from "aws-amplify";
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

export const getUserAttributes = async () => {
  const user = await Auth.currentAuthenticatedUser();
  return user
};

export const getToken = async () => {
  const user = await Auth.currentAuthenticatedUser();
  const token = user.signInUserSession.idToken.jwtToken;
  return token;
};
