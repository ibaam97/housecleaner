import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import GENDER from "@enums/GENDER";
import { createUser } from "@services/api/users";
import Screen from "@UIComponents/layout/Screen";
import { Auth } from "aws-amplify";
import * as React from "react";
import { Header } from "./Header";

export interface IUserHomeProps {}

export function UserHome(props: IUserHomeProps) {
  React.useEffect(() => {
    (async () => {
      try {
        const usssss = await Auth.currentCredentials()
        console.log(usssss, "kjnkn")
        const users = await createUser({
          newUser: {
            firstname: "Tunde",
            lastname: "Abayomi",
            email: "user_1@g.com",
            address: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            county: "Dublin",
            eircode: "D01 K93",
            phone: "0894907828",
            gender: GENDER.Male,
          },
        });
        console.log("users", users);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <Screen>
      <Header />
    </Screen>
  );
}

export default UserHome;
