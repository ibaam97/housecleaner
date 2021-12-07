import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import GENDER from "@enums/GENDER";
import { getServices } from "@services/api/services";
import { createUser, getUsers } from "@services/api/users";
import Screen from "@UIComponents/layout/Screen";
import { Auth } from "aws-amplify";
import * as React from "react";
import Service from "types/Service";
import Header from "./Header";

export interface IUserHomeProps {}

export function UserHome(props: IUserHomeProps) {
  return (
    <Screen>
      <Header />
    </Screen>
  );
}

export default UserHome;
