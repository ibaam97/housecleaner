import { UserRegistrationValues } from "@screens/User/UserAuthentication/UserRegistration/UserRegistrationValues";
import { UserSignInValues } from "@screens/User/UserAuthentication/UserSignIn/UserSignInValues";
import { getUser } from "@services/api/users";
import { Auth } from "aws-amplify";
import { GenericAxiosResponse } from "interfaces/api";
import { flow, types } from "mobx-state-tree";
import { getUserProfile, setToken, signIn } from "services/api";
import { User } from "./auth";

/**
 * This file is generated as an example of Mobx State Tree Stores
 *
 * To learn more about Mobx and Mobx State Tree,
 * please visit https://mobx-state-tree.js.org/intro/welcome
 */

export const AuthStore = types
  .model("Auth", {
    user: types.optional(types.frozen<User>(), {}),
    token: types.optional(types.string, localStorage.getItem("token") || ""),
  })
  .views((self) => ({
    get isAuthenticated() {
      return !!self.token;
    },
    get fullName() {
      return `${self.user.firstname} ${self.user.lastname}`;
    },
  }))
  .actions((self) => ({
    setUser(user: User) {
      self.user = user;
    },
    setToken(token: string) {
      self.token = token;
    },
  }))
  .actions((self) => ({
    signUp: flow(function* ({
      email,
      firstname,
      lastname,
      county,
      eircode,
      address,
      gender,
      phone,
      password,
    }: UserRegistrationValues) {
      try {
        const resp = yield Auth.signUp({
          username: email,
          password,
          attributes: {
            email,
            phone_number: phone,
            address,
            family_name: lastname,
            name: firstname,
            gender: gender,
          },
        });
        // yield setToken(`Bearer ${token}`);
        // localStorage.setItem("token", token);
        // self.token = token;
        return resp;
      } catch (error) {
        console.log(error);
        throw error;
      }
      return self.token;
    }),
    signIn: flow(function* ({ email, password }: UserSignInValues) {
      try {
        const user = yield Auth.signIn(email, password);
        console.log(user);
        return user;
      } catch (error) {
        console.log(`error`, error);
        throw error;
      }

    }),
    getUserProfile: flow(function* () {
      try {
        const resp = yield getUser({});
        console.log(resp, "USER");
        self.user = resp.data.data;
      } catch (error) {
        //set global error
        console.log(`error`, error);
      }

      return self.user;
    }),
    logOut: flow(function* () {
      yield Auth.signOut();
      self.user = {};
      localStorage.removeItem("token");
      self.token = "";

      return true;
    }),
  }));
