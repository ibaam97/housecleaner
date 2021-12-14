const parseCongnitoUser = (user) => {
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
  } = user;
  return {
    email,
    type,
    address,
    county,
    eircode,
    service_id,
    gender,
    lastname,
    firstname,
    phone,
  };
};

const parseUserToCognito = (user) => {
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
    } = user;
    return {
      email,
      type,
      address,
      county,
      eircode,
      service_id,
      gender,
      lastname,
      firstname,
      phone,
    };
  };

export {parseCongnitoUser, parseUserToCognito};
