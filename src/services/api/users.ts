import Id from "types/Id";
import { API, graphqlOperation } from "aws-amplify";
import {
  getUser as getUserQuery,
  listUsers,
  userByEmail,
} from "@services/graphql/queries";
import {
  createUser as createUserQuery,
  updateUser as updateUserQuery,
} from "@services/graphql/mutations";
import api from "./config";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import User from "types/User";
import GraphQueryResult from "@interfaces/GraphQueryResult";
import Service from "types/Service";

export const getUser = async ({
  authToken,
  filters,
  user_id,
}: {
  authToken?: string;
  filters?;
  user_id;
}) => {
  const res = API.graphql(graphqlOperation(getUserQuery, { id:user_id, filters })) as Promise<any>;
  return (await res).data["getUser"];
};

export const getUsers = ({
  authToken,
  filters,
}: {
  authToken?: string;
  filters?;
}) => API.graphql(graphqlOperation(listUsers, { filters })) as Promise<any>;

export const getUserByEmail = ({
  authToken,
  filters,
  email,
}: {
  authToken?: string;
  filters?;
  email: string;
}) => API.graphql(graphqlOperation(userByEmail, { email, filters }));

export const createUser = ({ newUser }: { newUser: User }) =>
  API.graphql({
    query: createUserQuery,
    variables: { input: { ...newUser } },
    authMode: "AMAZON_COGNITO_USER_POOLS",
  });

export const updateUser = ({ newUser, id }: { newUser: User; id?: Id }) =>
  API.graphql(
    graphqlOperation(updateUserQuery, { id, input: newUser })
  ) as Promise<GraphQLResult<GraphQueryResult<Service>>>;
