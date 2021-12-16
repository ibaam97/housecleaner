const { queryClientApi } = require("./config");

const { getBooking: getBookingQuery } = require("../graphql/queries");

const {
  updateBooking: updateBookingQuery,
  createBooking: createBookingQuery,
  deleteBooking: deleteBookingQuery,
} = require("../graphql/mutations");

const getBooking = async (id) => {
  return (await queryClientApi(getBookingQuery, { id })).data;
};

const updateBooking = async (id, data) => {
  return (
    await queryClientApi(updateBookingQuery, {
      input: {
        id,
        ...data,
      },
    })
  ).data;
};

const deleteBooking = async (id, data) => {
  return (
    await queryClientApi(deleteBookingQuery, {
      input: {
        id
      },
    })
  ).data;
};

const createBooking = async (data) => {
  return (
    await queryClientApi(createBookingQuery, {
      input: {
        ...data,
      },
    })
  ).data;
};

module.exports = { getBooking, updateBooking, createBooking, deleteBooking };
