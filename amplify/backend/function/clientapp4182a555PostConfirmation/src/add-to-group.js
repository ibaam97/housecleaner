/* eslint-disable-line */ const aws = require("aws-sdk");
const { createUser } = require("./services/api/users");
const USER_TYPES = require("./USER_TYPES");

const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({
  apiVersion: "2016-04-18",
});

exports.handler = async (event) => {
  const {
    email,
    "custom:type": type,
    address,
    "custom:county": county,
    "custom:eircode": eircode,
    name,
    family_name: lastname,
    name: firstname,
    phone_number: phone,
  } = event.request.userAttributes;

  const userGroup = USER_TYPES[userAttributes["custom:type"]];

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

  const res = await createUser(userAttributes.email, {
    type: userGroup,
    name,
    email,
    id: email,
    address,
    county,
    eircode,
    phone,
  });

  console.log("rescreated", res);
  
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