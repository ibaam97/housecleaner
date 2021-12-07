const { default: axios } = require("axios");
const { print } = require("graphql");


const clientappApi = axios.create({
  baseURL: process.env.API_CLIENTAPP_GRAPHQLAPIENDPOINTOUTPUT,
  method: "post",
  headers: {
    "x-api-key": process.env.API_CLIENTAPP_GRAPHQLAPIKEYOUTPUT,
  },
});

const queryClientApi = (query, variables) =>
  clientappApi({
    data: {
      query: print(query),
      variables,
    },
  });

module.exports = {queryClientApi, clientappApi};
