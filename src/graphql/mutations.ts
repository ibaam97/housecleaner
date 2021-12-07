/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBooking = /* GraphQL */ `
  mutation CreateBooking(
    $input: CreateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    createBooking(input: $input, condition: $condition) {
      id
      date
      address
      county
      eircode
      user_id
      contractor_id
      service_id
      booking_status
      createdAt
      updatedAt
      user {
        id
        firstname
        lastname
        email
        address
        county
        eircode
        phone
        gender
        createdAt
        updatedAt
      }
      contractor {
        firstname
        lastname
        email
        address
        county
        eircode
        id
        image
        service_id
        gender
        phone
        createdAt
        updatedAt
      }
      service {
        name
        id
        description
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateBooking = /* GraphQL */ `
  mutation UpdateBooking(
    $input: UpdateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    updateBooking(input: $input, condition: $condition) {
      id
      date
      address
      county
      eircode
      user_id
      contractor_id
      service_id
      booking_status
      createdAt
      updatedAt
      user {
        id
        firstname
        lastname
        email
        address
        county
        eircode
        phone
        gender
        createdAt
        updatedAt
      }
      contractor {
        firstname
        lastname
        email
        address
        county
        eircode
        id
        image
        service_id
        gender
        phone
        createdAt
        updatedAt
      }
      service {
        name
        id
        description
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteBooking = /* GraphQL */ `
  mutation DeleteBooking(
    $input: DeleteBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    deleteBooking(input: $input, condition: $condition) {
      id
      date
      address
      county
      eircode
      user_id
      contractor_id
      service_id
      booking_status
      createdAt
      updatedAt
      user {
        id
        firstname
        lastname
        email
        address
        county
        eircode
        phone
        gender
        createdAt
        updatedAt
      }
      contractor {
        firstname
        lastname
        email
        address
        county
        eircode
        id
        image
        service_id
        gender
        phone
        createdAt
        updatedAt
      }
      service {
        name
        id
        description
        createdAt
        updatedAt
      }
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstname
      lastname
      email
      address
      county
      eircode
      phone
      gender
      createdAt
      updatedAt
      bookings {
        nextToken
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstname
      lastname
      email
      address
      county
      eircode
      phone
      gender
      createdAt
      updatedAt
      bookings {
        nextToken
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      firstname
      lastname
      email
      address
      county
      eircode
      phone
      gender
      createdAt
      updatedAt
      bookings {
        nextToken
      }
    }
  }
`;
export const createContractor = /* GraphQL */ `
  mutation CreateContractor(
    $input: CreateContractorInput!
    $condition: ModelContractorConditionInput
  ) {
    createContractor(input: $input, condition: $condition) {
      firstname
      lastname
      email
      address
      county
      eircode
      id
      image
      service_id
      gender
      phone
      createdAt
      updatedAt
      bookings {
        nextToken
      }
      service {
        name
        id
        description
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateContractor = /* GraphQL */ `
  mutation UpdateContractor(
    $input: UpdateContractorInput!
    $condition: ModelContractorConditionInput
  ) {
    updateContractor(input: $input, condition: $condition) {
      firstname
      lastname
      email
      address
      county
      eircode
      id
      image
      service_id
      gender
      phone
      createdAt
      updatedAt
      bookings {
        nextToken
      }
      service {
        name
        id
        description
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteContractor = /* GraphQL */ `
  mutation DeleteContractor(
    $input: DeleteContractorInput!
    $condition: ModelContractorConditionInput
  ) {
    deleteContractor(input: $input, condition: $condition) {
      firstname
      lastname
      email
      address
      county
      eircode
      id
      image
      service_id
      gender
      phone
      createdAt
      updatedAt
      bookings {
        nextToken
      }
      service {
        name
        id
        description
        createdAt
        updatedAt
      }
    }
  }
`;
export const createService = /* GraphQL */ `
  mutation CreateService(
    $input: CreateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    createService(input: $input, condition: $condition) {
      name
      id
      description
      createdAt
      updatedAt
      bookings {
        nextToken
      }
      contractors {
        nextToken
      }
    }
  }
`;
export const updateService = /* GraphQL */ `
  mutation UpdateService(
    $input: UpdateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    updateService(input: $input, condition: $condition) {
      name
      id
      description
      createdAt
      updatedAt
      bookings {
        nextToken
      }
      contractors {
        nextToken
      }
    }
  }
`;
export const deleteService = /* GraphQL */ `
  mutation DeleteService(
    $input: DeleteServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    deleteService(input: $input, condition: $condition) {
      name
      id
      description
      createdAt
      updatedAt
      bookings {
        nextToken
      }
      contractors {
        nextToken
      }
    }
  }
`;
