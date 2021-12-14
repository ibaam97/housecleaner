import { createService } from "@services/api/services";
import { getServices } from "@services/api/services";
import { GenericAxiosResponse } from "interfaces/api";
import { flow, types } from "mobx-state-tree";
import Service from "types/Service";

/**
 * This file is generated as an example of Mobx State Tree Stores
 *
 * To learn more about Mobx and Mobx State Tree,
 * please visit https://mobx-state-tree.js.org/intro/welcome
 */

export const ServicesStore = types
  .model("Services", {
    services: types.optional(types.array(types.frozen<Service>()), []),
    currentService: types.optional(types.frozen<Service>(), null),
    fetching: false,
  })
  .views((self) => ({}))
  .actions((self) => ({
    getServices: flow(function* (payload) {
      try {
        self.fetching = true;
        const services = yield getServices(payload);
        self.services = services;
        console.log("services", services);
        // self.servicesMeta = rest;
        return services;
      } catch (error) {
        //set global error
        console.log({ ...error });
        console.log(`error`, error);
      } finally {
        self.fetching = false;
      }
    }),
  }))
  .actions((self) => ({
    createService: flow(function* (payload) {
      try {
        self.fetching = true;
        const service = yield createService(payload);
        yield self.getServices({});
        // self.ServicesMeta = rest;
        return service;
      } catch (error) {
        //set global error
        console.log({ ...error });
        console.log(`error`, error);
        throw error;
      } finally {
        self.fetching = false;
      }
    }),
  }));
