/* eslint-disable-line */ const aws = require("aws-sdk");
const USER_TYPES = require("./USER_TYPES");

const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({
  apiVersion: "2016-04-18",
});

exports.handler = async (event) => {
  const userGroup = USER_TYPES[event.request.userAttributes['custom:type']];

  console.log("user group", userGroup);


  if (!userGroup) throw "User type invalid.";

  const groupParams = {
    GroupName: userGroup,
    UserPoolId: event.userPoolId,
  };
  const addUserParams = {
    GroupName: userGroup,
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };
  /**
   * Check if the group exists; if it doesn't, create it.
   */
  try {
    await cognitoidentityserviceprovider.getGroup(groupParams).promise();
  } catch (e) {
    await cognitoidentityserviceprovider.createGroup(groupParams).promise();
  }
  /**
   * Then, add the user to the group.
   */
  await cognitoidentityserviceprovider
    .adminAddUserToGroup(addUserParams)
    .promise();

  return event;
};
