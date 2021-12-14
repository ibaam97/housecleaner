const { queryClientApi } = require("./config");

const { updateContractor: updateContractorQuery } = require("../graphql/mutations");

const updateContractor = async (id, data) => {
  return (
    await queryClientApi(updateContractorQuery, {
      input: {
        id,
        ...data,
      },
    })
  ).data;
};

module.exports = { updateContractor };
 