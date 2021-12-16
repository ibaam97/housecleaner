import {
  createBooking,
  createReview,
  getBookings,
  getContractorBookings,
  getServiceBookings,
  getUserBookings,
} from "@services/api/bookings";
import { GenericAxiosResponse } from "interfaces/api";
import { flow, types } from "mobx-state-tree";
import { Booking } from "types/Booking";

/**
 * This file is generated as an example of Mobx State Tree Stores
 *
 * To learn more about Mobx and Mobx State Tree,
 * please visit https://mobx-state-tree.js.org/intro/welcome
 */

export const BookingsStore = types
  .model("Bookings", {
    bookings: types.optional(types.array(types.frozen<Booking>()), []),
    fetching: false,
  })
  .views((self) => ({}))
  .actions((self) => ({
    getBookings: flow(function* (payload) {
      try {
        self.fetching = true;
        const bookings = yield getBookings(payload);
        self.bookings = bookings;
        // self.bookingsMeta = rest;
        return bookings;
      } catch (error) {
        //set global error
        console.log({ ...error });
        console.log(`error`, error);
      } finally {
        self.fetching = false;
      }
    }),
    getUserBookings: flow(function* (payload) {
      try {
        self.fetching = true;
        const bookings = yield getUserBookings(payload);
        self.bookings = bookings;
        return bookings;
      } catch (error) {
        //set global error
        console.log({ ...error });
        console.log(`error`, error);
        throw error;
      } finally {
        self.fetching = false;
      }
    }),
    getContractorBookings: flow(function* (payload) {
      try {
        self.fetching = true;
        const bookings = yield getContractorBookings(payload);
        self.bookings = bookings;
        return bookings;
      } catch (error) {
        //set global error
        console.log({ ...error });
        console.log(`error`, error);
        throw error;
      } finally {
        self.fetching = false;
      }
    }),
    getServiceBookings: flow(function* ({ service_id }) {
      try {
        self.fetching = true;
        const bookings = yield getServiceBookings(service_id);
        self.bookings = bookings;
        return bookings;
      } catch (error) {
        //set global error
        console.log({ ...error });
        console.log(`error`, error);
        throw error;
      } finally {
        self.fetching = false;
      }
    }),
  }))
  .actions((self) => ({
    createBooking: flow(function* (payload: Booking) {
      try {
        self.fetching = true;
        console.log("payload", payload);
        const booking = yield createBooking({ newBooking: payload });
        yield self.getBookings({});
        return booking;
      } catch (error) {
        //set global error
        console.log({ ...error });
        console.log(`error`, error);
        throw error;
      } finally {
        self.fetching = false;
      }
    }),
    createReview: flow(function* ({ booking_id, comment, rating }) {
      try {
        self.fetching = true;
        const booking = yield createReview({
          booking_id,
          comment,
          rating,
        });
        return booking;
      } catch (error) {
        console.log({ ...error });
        console.log(`error`, error);
        throw error;
      } finally {
        self.fetching = false;
      }
    }),
  }));
