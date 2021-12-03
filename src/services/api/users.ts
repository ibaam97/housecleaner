import Id from "types/Id";
import { API, graphqlOperation } from "aws-amplify";
import {
  getUser as getUserQuery,
  listUsers,
  userByEmail,
} from "graphql/queries";
import {
  createUser as createUserQuery,
  updateUser as updateUserQuery,
} from "graphql/mutations";
import api from "./config";
import User from "types/User";

export const getUser = ({
  authToken,
  filters,
}: {
  authToken?: string;
  filters?;
}) => API.graphql(graphqlOperation(getUserQuery, { filters })) as Promise<any>;

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
  API.graphql(graphqlOperation(createUserQuery, { ...newUser }));

export const updateUser = ({ newUser, id }: { newUser: User; id?: Id }) =>
  API.graphql(graphqlOperation(updateUserQuery, { id, ...newUser }));
