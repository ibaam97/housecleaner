import Id from "types/Id";
import { API, graphqlOperation } from "aws-amplify";
import {
  bookingsByContactorAndDate,
  bookingsByServiceAndDate,
  bookingsByUserAndDate,
  listBookings,
} from "graphql/queries";
import {
  createBooking as createBookingQuery,
  updateBooking as updateBookingQuery,
} from "graphql/mutations";
import { Booking } from "types/Booking";
export const getBookings = ({
  authToken,
  filters,
}: {
  authToken?: string;
  filters;
}) => API.graphql(graphqlOperation(listBookings, { filters }));

export const getUserBookings = ({
  authToken,
  filters,
  user_id,
}: {
  authToken?: string;
  filters;
  user_id: Id;
  date: any;
}) =>
  API.graphql(graphqlOperation(bookingsByUserAndDate, { user_id, filters }));

export const getContractorBookings = ({
  authToken,
  filters,
  contractor_id,
}: {
  authToken?: string;
  filters;
  contractor_id: Id;
  date: any;
}) =>
  API.graphql(
    graphqlOperation(bookingsByContactorAndDate, { contractor_id, filters })
  );

export const getServiceBookings = ({
  authToken,
  filters,
  service_id,
}: {
  authToken?: string;
  filters;
  service_id: Id;
  date: any;
}) =>
  API.graphql(
    graphqlOperation(bookingsByServiceAndDate, { service_id, filters })
  );

export const createBooking = ({ newBooking }: { newBooking: Booking }) =>
  API.graphql(graphqlOperation(createBookingQuery, { ...newBooking }));

export const updateBooking = ({ newBooking, id }: { newBooking: Booking; id?: Id }) =>
  API.graphql(graphqlOperation(updateBookingQuery, { id, ...newBooking }));
