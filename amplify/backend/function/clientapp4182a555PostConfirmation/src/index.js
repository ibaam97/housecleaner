/* Amplify Params - DO NOT EDIT
	API_BOOKINGSRESTAPI_APIID
	API_BOOKINGSRESTAPI_APINAME
	API_CLIENTAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_CLIENTAPP_GRAPHQLAPIIDOUTPUT
	API_CLIENTAPP_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT *//**
 * @fileoverview
 *
 * This CloudFormation Trigger creates a handler which awaits the other handlers
 * specified in the `MODULES` env var, located at `./${MODULE}`.
 */

/**
 * The names of modules to load are stored as a comma-delimited string in the
 * `MODULES` env var.
 */
const moduleNames = process.env.MODULES.split(',');
/**
 * The array of imported modules.
 */
const modules = moduleNames.map(name => require(`./${name}`));

/**
 * This async handler iterates over the given modules and awaits them.
 *
 * @see https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html#nodejs-handler-async
 *
 * @param {object} event
 *
 * The event that triggered this Lambda.
 *
 * @returns
 *
 * The handler response.
 */
exports.handler = async event => {
  /**
   * Instead of naively iterating over all handlers, run them concurrently with
   * `await Promise.all(...)`. This would otherwise just be determined by the
   * order of names in the `MODULES` var.
   */
  await Promise.all(modules.map(module => module.handler(event)));
  return event;
};
