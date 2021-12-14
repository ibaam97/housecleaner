import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import GENDER from "@enums/GENDER";
import { getServices } from "@services/api/services";
import { createUser, getUsers } from "@services/api/users";
import Screen from "@UIComponents/layout/Screen";
import { Auth } from "aws-amplify";
import * as React from "react";
import { useRootStore } from "store";
import Service from "types/Service";
import Header from "./Header";

export interface IUserHomeProps {}

export function UserHome(props: IUserHomeProps) {
  const {
    bookingsStore: { createReview },
  } = useRootStore();

  React.useEffect(() => {
    (async () => {
      const res = await createReview({
        booking_id: "36c6e169-3baf-454e-b7a3-04113d3ed9d2",
        comment: "hellother",
        rating: 3,
      });
      console.log(res, "nnjj"  )
    })();
  }, []);

  return (
    <Screen>
      <Header />
    </Screen>
  );
}

export default UserHome;
