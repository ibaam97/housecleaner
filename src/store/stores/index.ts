import { types } from "mobx-state-tree";
import { AuthStore } from "./auth";
import { persist } from "mst-persist";
import { ServicesStore } from "./services";
import { BookingsStore } from "./bookings";

export const RootStore = types.model("RootStore", {
  authStore: AuthStore,
  servicesStore: ServicesStore,
  bookingsStore: BookingsStore,
});

export const createRootStore = () => {
  const authStore = AuthStore.create();

  return RootStore.create({
    servicesStore: ServicesStore.create(),
    bookingsStore: BookingsStore.create(),
    authStore,
  });
};
