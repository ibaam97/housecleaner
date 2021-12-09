import { ContractorRegistrationValues } from "@screens/Contractor/ContractorAuthentication/ContractorRegistration/ContractorRegistrationValues";
import { UserChangePasswordValues } from "@screens/User/UserAuthentication/UserChangePassword/UserChangePasswordValues";
import { UserRegistrationValues } from "@screens/User/UserAuthentication/UserRegistration/UserRegistrationValues";
import { UserSignInValues } from "@screens/User/UserAuthentication/UserSignIn/UserSignInValues";
import { UserSettingsValues } from "@screens/User/UserDashboard/UserSettings/UserSettingsPage/UserSettingsValues";
import { getUser } from "@services/api/users";
import { Auth } from "aws-amplify";
import addDefinedPropsToObject from "helpers/addDefinedPropsToObject";
import { GenericAxiosResponse } from "interfaces/api";
import { flow, types } from "mobx-state-tree";
import { getCurrentUser, getUserAttributes, getUserProfile, setToken, signIn } from "services/api";
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
    signUpUser: flow(function* ({
      email,
      firstname,
      lastname,
      county,
      eircode,
      address,
      gender,
      phone,
      password,
      type,
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
            "custom:type": type,
            "custom:county": county,
            "custom:eircode": eircode,
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
    signUpContractor: flow(function* ({
      email,
      firstname,
      lastname,
      county,
      eircode,
      address,
      gender,
      phone,
      password,
      type,
      service_id
    }: ContractorRegistrationValues) {
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
            "custom:type": type,
            "custom:county": county,
            "custom:eircode": eircode,
            "custom:service_id": service_id,
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
    updateUser: flow(function* ({
      email,
      firstname,
      lastname,
      county,
      eircode,
      address,
      gender,
      phone,
      type,
      service_id
    }: UserSettingsValues) {
      try {
        const  user = yield getCurrentUser()
        const resp = yield Auth.updateUserAttributes(user, addDefinedPropsToObject({
          email,
          phone_number: phone,
          address,
          family_name: lastname,
          name: firstname,
          gender: gender,
          "custom:type": type,
          "custom:county": county,
          "custom:eircode": eircode,
          "custom:service_id": service_id,
        }))
        
        // yield setToken(`Bearer ${token}`);
        // localStorage.setItem("token", token);
        // self.token = token;
        return resp;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }),
    changePassword: flow(function* ({
      oldPassword, newPassword
    }: UserChangePasswordValues) {
      try {
        const  user = yield getCurrentUser()
        const resp = yield Auth.changePassword(user, oldPassword, newPassword)
        
        // yield setToken(`Bearer ${token}`);
        // localStorage.setItem("token", token);
        // self.token = token;
        return resp;
      } catch (error) {
        console.log(error);
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
      self.token = "";

      return true;
    }),
  }));
