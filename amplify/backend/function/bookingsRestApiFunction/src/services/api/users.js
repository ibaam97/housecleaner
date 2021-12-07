const { queryClientApi } = require("./config");

const { getBooking: getBookingQuery } = require("../graphql/queries");

const getBooking = async (id) => {
  return (await queryClientApi(getBookingQuery, { id })).data;
};

module.exports = { getBooking };
