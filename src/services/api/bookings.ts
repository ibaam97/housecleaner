import Id from "types/Id";
import { API, graphqlOperation } from "aws-amplify";
import {
  bookingsByContactorAndDate,
  bookingsByServiceAndDate,
  bookingsByUserAndDate,
  listBookings,
  getBooking as getBookingQuery,
} from "@services/graphql/queries";
import {
  createBooking as createBookingQuery,
  updateBooking as updateBookingQuery,
} from "@services/graphql/mutations";
import { Booking } from "types/Booking";
import ListGraphQueryResult from "@interfaces/ListGraphQueryResult";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import GraphQueryResult from "@interfaces/GraphQueryResult";
import BOOKING_STATUS from "@enums/BOOKING_STATUS.enum";
import { restRequest } from "./config";
import { getUserAttributes } from "./auth";

export const getBooking = async ({
  authToken,
  filters,
  booking_id,
}: {
  authToken?: string;
  filters?;
  booking_id;
}) => {
  const res = API.graphql(
    graphqlOperation(getBookingQuery, { booking_id, filters })
  ) as Promise<GraphQLResult<GraphQueryResult<Booking>>>;
  return (await res).data["getBooking"];
};

export const getBookings = async ({
  authToken,
  filters,
}: {
  authToken?: string;
  filters?;
}) => {
  const res = API.graphql(
    graphqlOperation(listBookings, { filters })
  ) as Promise<GraphQLResult<ListGraphQueryResult<Booking>>>;
  return (await res).data["listBookings"].items;
};

export const getUserBookings = async ({
  authToken,
  filters,
  user_id,
}: {
  authToken?: string;
  filters?;
  user_id: Id;
  date?: any;
}) => {
  const res = API.graphql(
    graphqlOperation(bookingsByUserAndDate, {
      user_id: user_id || (await getUserAttributes()).email,
      filters,
    })
  ) as Promise<GraphQLResult<ListGraphQueryResult<Booking>>>;
  return (await res).data["bookingsByUserAndDate"].items;
};

export const getContractorBookings = async ({
  authToken,
  filters,
  contractor_id,
}: {
  authToken?: string;
  filters?;
  contractor_id: Id;
  date?: any;
}) => {
  const res = API.graphql(
    graphqlOperation(bookingsByContactorAndDate, { contractor_id: contractor_id || (await getUserAttributes()).email, filters })
  ) as Promise<GraphQLResult<ListGraphQueryResult<Booking>>>;
  return (await res).data["bookingsByContactorAndDate"].items;
};

export const getServiceBookings = async ({
  authToken,
  filters,
  service_id,
}: {
  authToken?: string;
  filters?;
  service_id: Id;
  date?: any;
}) => {
  const res = API.graphql(
    graphqlOperation(bookingsByServiceAndDate, { service_id, filters })
  ) as Promise<GraphQLResult<ListGraphQueryResult<Booking>>>;
  return (await res).data["bookingsByServiceAndDate"].items;
};

// export const createBooking = async ({
//   authToken,
//   newBooking,
// }: {
//   newBooking: Booking;
//   authToken?;
// }) => {
//   console.log("new booking", newBooking);
//   const res = API.graphql(
//     graphqlOperation(createBookingQuery, {
//       input: {
//         ...newBooking,
//         booking_status: BOOKING_STATUS.UNASSIGNED,
//         user_id: "user_1@g.com",
//       },
//     })
//   ) as Promise<GraphQLResult<GraphQueryResult<Booking>>>;
//   return (await res).data["createBooking"];
// };

export const createBooking = async ({
  authToken,
  newBooking,
}: {
  authToken?;
  newBooking: Booking;
}) => {
  const res = await restRequest(
    "post",
    "bookingsRestApi",
    `/bookings/create`,
    newBooking
  );
  return res.data.createBooking;
};

export const deleteBooking = async ({
  authToken,
  booking_id,
}: {
  authToken?;
  booking_id: string;
}) => {
  const res = await restRequest(
    "get",
    "bookingsRestApi",
    `/bookings/${booking_id}/delete`
  );
  return res;
};

export const updateBooking = async ({
  newBooking,
  id,
}: {
  newBooking;
  id?: Id;
}) => {
  const res = API.graphql(
    graphqlOperation(updateBookingQuery, { input: { id, ...newBooking } })
  ) as Promise<GraphQLResult<GraphQueryResult<Booking>>>;
  return (await res).data["updateBooking"];
};

export const acceptBooking = async ({ id }) => {
  const res = await restRequest(
    "get",
    "bookingsRestApi",
    `/bookings/${id}/accept`
  );
  return res;
};

export const checkinBooking = async ({ id }) => {
  const res = await restRequest(
    "get",
    "bookingsRestApi",
    `/bookings/${id}/checkin`
  );
  return res;
};

export const checkoutBooking = async ({ id }) => {
  const res = await restRequest(
    "get",
    "bookingsRestApi",
    `/bookings/${id}/checkout`
  );
  return res;
};

export const createReview = async ({ booking_id, comment, rating }) => {
  const res = await restRequest(
    "post",
    "bookingsRestApi",
    `/bookings/${booking_id}/review`,
    { comment, rating }
  );
  return res;
};
