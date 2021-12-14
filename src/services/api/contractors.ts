import Id from "types/Id";
import { API, graphqlOperation } from "aws-amplify";
import {
  contractorByServiceAndCountyAndGender,
  listContractors,
  getContractor as getContractorQuery,
} from "@services/graphql/queries";
import {
  createContractor as createContractorQuery,
  updateContractor as updateContractorQuery,
} from "@services/graphql/mutations";
import Contractor from "types/Contractor";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import ListGraphQueryResult from "@interfaces/ListGraphQueryResult";
import Service from "types/Service";
import GraphQueryResult from "@interfaces/GraphQueryResult";

export const getContractor = async ({
  authToken,
  filters,
  contractor_id,
}: {
  authToken?: string;
  filters?;
  contractor_id;
}) => {
  const res = API.graphql(
    graphqlOperation(getContractorQuery, { id: contractor_id, filters })
  ) as Promise<GraphQLResult<GraphQueryResult<Contractor>>>;
  return (await res).data["getContractor"];
};
export const getContractors = async ({
  authToken,
  filters,
}: {
  authToken?: string;
  filters;
}) => {
  const res = API.graphql(
    graphqlOperation(listContractors, { filters })
  ) as Promise<GraphQLResult<ListGraphQueryResult<Contractor>>>;
  return (await res).data["listContractors"].items;
};

export const getServiceContractors = async ({
  authToken,
  filters,
  service_id,
}: {
  authToken?: string;
  filters?;
  service_id: Id;
}) => {
  const res = API.graphql(
    graphqlOperation(contractorByServiceAndCountyAndGender, { service_id })
  ) as Promise<GraphQLResult<ListGraphQueryResult<Contractor>>>;
  return (await res).data["contractorByServiceAndCountyAndGender"].items;
};

export const createContractor = async ({
  newContractor,
}: {
  newContractor: Contractor;
}) => {
  const res = API.graphql(
    graphqlOperation(createContractorQuery, { ...newContractor })
  ) as Promise<GraphQLResult<ListGraphQueryResult<Contractor>>>;
  return (await res).data["createContractor"];
};

export const updateContractor = async ({
  newContractor,
  id,
}: {
  newContractor: Contractor;
  id?: Id;
}) => {
  const res = API.graphql(
    graphqlOperation(updateContractorQuery, { id, input: newContractor })
  ) as Promise<GraphQLResult<ListGraphQueryResult<Contractor>>>;
  return (await res).data["updateContractor"];
};
