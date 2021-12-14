const { queryClientApi } = require("./config");

const {
  createPayment: createPaymentQuery,
} = require("../graphql/mutations");

const createPayment = async (data) => {
  return (
    await queryClientApi(createPaymentQuery, {
      input: {
        ...data,
      },
    })
  ).data;
};

module.exports = { createPayment };
