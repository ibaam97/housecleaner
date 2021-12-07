const { queryClientApi } = require("./config");
const { createUser: createUserQuery } = require("../graphql/mutations");

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

module.exports = { createUser };
