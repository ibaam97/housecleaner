import Id from "types/Id";
import { API, graphqlOperation } from "aws-amplify";
import { listServices, getService as getServiceQuery } from "graphql/queries";
import {
  createService as createServiceQuery,
  updateService as updateServiceQuery,
} from "graphql/mutations";
import Service from "types/Service";

export const getService = ({
  authToken,
  filters,
  service_id,
}: {
  authToken?: string;
  filters;
  service_id: Id;
}) => API.graphql(graphqlOperation(getServiceQuery, { service_id, filters }));

export const getServices = ({
  authToken,
  filters,
}: {
  authToken?: string;
  filters;
}) => API.graphql(graphqlOperation(listServices, { filters }));

export const createService = ({ newService }: { newService: Service }) =>
  API.graphql(graphqlOperation(createServiceQuery, { ...newService }));

export const updateService = ({ newService, id }: { newService: Service; id?: Id }) =>
  API.graphql(graphqlOperation(updateServiceQuery, { id, ...newService }));