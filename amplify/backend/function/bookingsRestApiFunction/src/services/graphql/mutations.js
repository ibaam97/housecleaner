/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const gql = require("graphql-tag");

const createBooking = gql`
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
const updateBooking = gql`
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
const deleteBooking = gql`
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
const createUser = gql`
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
const updateUser = gql`
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
const deleteUser = gql`
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
const createContractor = gql`
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
const updateContractor = gql`
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
      service_id
      gender
      phone
      createdAt
      updatedAt
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
const deleteContractor = gql`
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
const createService = gql`
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
const updateService = gql`
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
const deleteService = gql`
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

module.exports = {
  createBooking,
  updateBooking,
  updateContractor
};
