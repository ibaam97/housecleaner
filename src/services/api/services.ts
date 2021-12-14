import Id from "types/Id";
import { API, graphqlOperation } from "aws-amplify";
import { listServices, getService as getServiceQuery } from "@services/graphql/queries";
import {
  createService as createServiceQuery,
  updateService as updateServiceQuery,
} from "@services/graphql/mutations";
import Service from "types/Service";

import { GraphQLResult } from "@aws-amplify/api-graphql";
import ListGraphQueryResult from "@interfaces/ListGraphQueryResult";
import GraphQueryResult from "@interfaces/GraphQueryResult";

export const getService = async ({
  authToken,
  filters,
  service_id,
}: {
  authToken?: string;
  filters;
  service_id: Id;
}) => {
  const res = API.graphql(
    graphqlOperation(getServiceQuery, { service_id, filters })
  ) as Promise<GraphQLResult<GraphQueryResult<Service>>>;
  return (await res).data["getService"];
};
export const getServices = async ({
  authToken,
  filters,
}: {
  authToken?: string;
  filters?;
}) => {
  const res = API.graphql(
    graphqlOperation(listServices, { filters })
  ) as Promise<GraphQLResult<ListGraphQueryResult<Service>>>;
  return (await res).data["listServices"].items;
};

export const createService = async ({
  newService,
}: {
  newService: Service;
}) => {
  const res = API.graphql(
    graphqlOperation(createServiceQuery, { ...newService })
  ) as Promise<GraphQLResult<ListGraphQueryResult<Service>>>;
  return (await res).data["createService"];
};

export const updateService = async ({
  newService,
  id,
}: {
  newService: Service;
  id?: Id;
}) => {
  const res = API.graphql(
    graphqlOperation(updateServiceQuery, { id, ...newService })
  ) as Promise<GraphQLResult<ListGraphQueryResult<Service>>>;
  return (await res).data["updateService"];
};
