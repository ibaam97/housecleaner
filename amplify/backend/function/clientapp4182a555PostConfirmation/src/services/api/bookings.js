const { queryClientApi } = require("./config");

const { getBooking: getBookingQuery } = require("../graphql/queries");
const { updateBooking: updateBookingQuery } = require("../graphql/mutations");

const getBooking = async (id) => {
  return (await queryClientApi(getBookingQuery, { id })).data;
};

const updateBooking = async (id, data) => {
  return (
      await queryClientApi(updateBookingQuery, {
      input: {
        id,
        ...data
      },
    })
  ).data;
};

module.exports = { getBooking, updateBooking };
