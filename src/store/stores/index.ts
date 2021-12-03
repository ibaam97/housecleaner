import { types } from "mobx-state-tree";
import { AuthStore } from "./auth";
import { persist } from "mst-persist";

export const RootStore = types.model("RootStore", {
  authStore: AuthStore,
});

export const createRootStore = () => {
  const authStore = AuthStore.create();

  return RootStore.create({
    authStore,
  });
};
