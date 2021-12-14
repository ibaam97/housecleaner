import USER_TYPE from "@enums/USER_TYPE.enum";
import { ContractorRegistrationValues } from "@screens/Contractor/ContractorAuthentication/ContractorRegistration/ContractorRegistrationValues";
import { UserChangePasswordValues } from "@screens/User/UserAuthentication/UserChangePassword/UserChangePasswordValues";
import { UserRegistrationValues } from "@screens/User/UserAuthentication/UserRegistration/UserRegistrationValues";
import { UserSignInValues } from "@screens/User/UserAuthentication/UserSignIn/UserSignInValues";
import { UserSettingsValues } from "@screens/User/UserDashboard/UserSettings/UserSettingsPage/UserSettingsValues";
import { getContractor, updateContractor } from "@services/api/contractors";
import { getUser, updateUser } from "@services/api/users";
import { Auth } from "aws-amplify";
import addDefinedPropsToObject from "helpers/addDefinedPropsToObject";
import { GenericAxiosResponse } from "interfaces/api";
import { flow, types } from "mobx-state-tree";
import {
  getCurrentUser,
  getUserAttributes,
  getUserProfile,
  setToken,
  signIn,
} from "services/api";
import Contractor from "types/Contractor";
import { User } from "./auth";

/**
 * This file is generated as an example of Mobx State Tree Stores
 *
 * To learn more about Mobx and Mobx State Tree,
 * please visit https://mobx-state-tree.js.org/intro/welcome
 */

export const AuthStore = types
  .model("Auth", {
    user: types.optional(types.frozen<(User | Contractor) & { type?: USER_TYPE } >(), null),
    token: types.optional(types.frozen<string>(), localStorage.getItem("token") || null),
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
    setUser(user: User | Contractor ) {
      self.user = user;
    },
    setToken(token: string) {
      self.token = token;
    },
  }))
  .actions((self) => ({
    getUserProfile: flow(function* () {
      try {
        const userAttributes = yield getUserAttributes();
        const type = userAttributes["custom:type"];
        const userFromDB =
          type === USER_TYPE.User
            ? yield getUser({ user_id: userAttributes.email })
            : yield getContractor({ contractor_id: userAttributes.email });
        console.log(userFromDB, "userFromDb");
        self.setUser({ ...userFromDB, type });
        return userFromDB;
      } catch (error) {
        //set global error
        console.log(`errorhh`, error);
      }

      return self.user;
    }),
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
        return yield Auth.signUp({
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
      } catch (error) {
        console.log(error);
        throw error;
      }
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
      service_id,
    }: ContractorRegistrationValues) {
      try {
        return yield Auth.signUp({
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
      } catch (error) {
        console.log(error);
        throw error;
      }
      return self.token;
    }),
    signIn: flow(function* ({ email, password }: UserSignInValues) {
      try {
        const user = yield Auth.signIn(email, password);
        yield self.getUserProfile();
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
      service_id,
    }: UserSettingsValues) {
      try {
        const user = yield getCurrentUser();
        const resp = yield Auth.updateUserAttributes(
          user,
          addDefinedPropsToObject({
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
          })
        );

        const updatedUser = addDefinedPropsToObject({
          id: email,
          email,
          firstname,
          lastname,
          county,
          eircode,
          address,
          gender,
          phone,
        });

        if (type === "User") {
          yield updateUser({
            // @ts-ignore
            newUser: updatedUser,
          });
        } else {
          yield updateContractor({
            // @ts-ignore
            newContractor: addDefinedPropsToObject({
              ...updateUser,
              service_id,
            }),
          });
        }
        yield self.getUserProfile();
        return resp;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }),
    changePassword: flow(function* ({
      oldPassword,
      newPassword,
    }: UserChangePasswordValues) {
      try {
        const user = yield getCurrentUser();
        return yield Auth.changePassword(user, oldPassword, newPassword);
      } catch (error) {
        console.log(error);
        throw error;
      }
    }),
    logOut: flow(function* () {
      yield Auth.signOut();
      self.user = null;
      self.token = null;
      return true;
    }),
  }));
