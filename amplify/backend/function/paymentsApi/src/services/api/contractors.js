const { queryClientApi } = require("./config");

const { getContractor: getContractorQuery } = require("../graphql/queries");

const {
  updateContractor: updateContractorQuery,
  createContractor: createContractorQuery,
} = require("../graphql/mutations");

const getContractor = async (id) => {
  return (await queryClientApi(getContractorQuery, { id })).data;
};

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

const createContractor = async (data) => {
  return (
    await queryClientApi(createContractorQuery, {
      input: {
        ...data,
      },
    })
  ).data;
};

module.exports = { getContractor, updateContractor, createContractor };
