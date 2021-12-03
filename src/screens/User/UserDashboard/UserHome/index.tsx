import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import Screen from "@UIComponents/layout/Screen";
import * as React from "react";
import { Header } from "./Header";

export interface IUserHomeProps {}

export function UserHome(props: IUserHomeProps) {
  return (
    <Screen>
      <Header />
    </Screen>
  );
}

export default UserHome;
