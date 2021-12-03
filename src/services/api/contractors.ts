import Id from "types/Id";
import { API, graphqlOperation } from "aws-amplify";
import {
  contractorByServiceAndCountyAndGender,
  listContractors,
} from "graphql/queries";
import {
  createContractor as createContractorQuery,
  updateContractor as updateContractorQuery,
} from "graphql/mutations";
import Contractor from "types/Contractor";

export const getContractor = ({
  authToken,
  filters,
  contractor_id,
}: {
  authToken?: string;
  filters;
  contractor_id;
}) => API.graphql(graphqlOperation(getContractor, { contractor_id, filters }));
export const getContractors = ({
  authToken,
  filters,
}: {
  authToken?: string;
  filters;
}) => API.graphql(graphqlOperation(listContractors, { filters }));

export const getServiceContractors = ({
  authToken,
  filters,
  service_id,
}: {
  authToken?: string;
  filters;
  service_id: Id;
}) =>
  API.graphql(
    graphqlOperation(contractorByServiceAndCountyAndGender, { service_id })
  );

export const createContractor = ({ newContractor }: { newContractor: Contractor }) =>
  API.graphql(graphqlOperation(createContractorQuery, { ...newContractor }));

export const updateContractor = ({ newContractor, id }: { newContractor: Contractor; id?: Id }) =>
  API.graphql(graphqlOperation(updateContractorQuery, { id, ...newContractor }));
