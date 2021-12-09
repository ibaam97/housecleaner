/* eslint-disable-line */ const aws = require("aws-sdk");
const { createUser, createContractor } = require("./services/api/users");
const USER_TYPES = require("./USER_TYPES");

const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({
  apiVersion: "2016-04-18",
});

exports.handler = async (event) => {
  console.log(event);

  const {
    email,
    "custom:type": type,
    address,
    "custom:county": county,
    "custom:eircode": eircode,
    "custom:service_id": service_id,
    gender,
    family_name: lastname,
    name: firstname,
    phone_number: phone,
  } = event.request.userAttributes;

  const userGroup = USER_TYPES[type];

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

  let res

  console.log({
    firstname,
    lastname,
    email,
    id: email,
    address,
    county,
    eircode,
    gender,
    phone,
    service_id
  })

  if (userGroup === USER_TYPES.Contractor) {
    res = await createContractor(email, {
      firstname,
      lastname,
      email,
      id: email,
      address,
      county,
      eircode,
      gender,
      phone,
      service_id
    });
  }

  if (userGroup === USER_TYPES.User) {
    res = await createUser(email, {
      firstname,
      lastname,
      email,
      id: email,
      address,
      county,
      eircode,
      phone,
    });
  }

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
