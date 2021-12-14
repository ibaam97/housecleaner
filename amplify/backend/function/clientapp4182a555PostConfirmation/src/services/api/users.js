const { queryClientApi } = require("./config");
const { createUser: createUserQuery, createContractor: createContractorQuery  } = require("../graphql/mutations");

const createUser = async (id, data) => {
  return (
      await queryClientApi(createUserQuery, {
      input: {
        id,
        ...data
      },
    })
  ).data;
};

const createContractor = async (id, data) => {
  return (
      await queryClientApi(createContractorQuery, {
      input: {
        id,
        ...data
      },
    })
  ).data;
};

module.exports = { createUser, createContractor };
