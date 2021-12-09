/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const gql = require("graphql-tag");

const getBooking = gql`
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
      id
      date
      address
      county
      eircode
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
      user_id
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
      contractor_id
      service {
        name
        id
        description
        createdAt
        updatedAt
      }
      service_id
      booking_status
      createdAt
      updatedAt
    }
  }
`;
const listBookings = gql`
  query ListBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      }
      nextToken
    }
  }
`;
const getUser = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstname
      lastname
      email
      address
      county
      eircode
      phone
      bookings {
        nextToken
      }
      gender
      createdAt
      updatedAt
    }
  }
`;
const listUsers = gql`
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
const getContractor = gql`
  query GetContractor($id: ID!) {
    getContractor(id: $id) {
      firstname
      lastname
      email
      address
      county
      eircode
      i
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
      service_id
      gender
      phone
      createdAt
      updatedAt
    }
  }
`;
const listContractors = gql`
  query ListContractors(
    $filter: ModelContractorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContractors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
const getService = gql`
  query GetService($id: ID!) {
    getService(id: $id) {
      name
      id
      description
      bookings {
        nextToken
      }
      contractors {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
const listServices = gql`
  query ListServices(
    $filter: ModelServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        id
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
const bookingsByUserAndDate = gql`
  query BookingsByUserAndDate(
    $user_id: ID
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookingsByUserAndDate(
      user_id: $user_id
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      }
      nextToken
    }
  }
`;
const bookingsByContactorAndDate = gql`
  query BookingsByContactorAndDate(
    $contractor_id: ID
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookingsByContactorAndDate(
      contractor_id: $contractor_id
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      }
      nextToken
    }
  }
`;
const bookingsByServiceAndDate = gql`
  query BookingsByServiceAndDate(
    $service_id: ID
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookingsByServiceAndDate(
      service_id: $service_id
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      }
      nextToken
    }
  }
`;
const userByEmail = gql`
  query UserByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
const userByCountyAndGender = gql`
  query UserByCountyAndGender(
    $county: String
    $gender: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByCountyAndGender(
      county: $county
      gender: $gender
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
const contractorByEmail = gql`
  query ContractorByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelContractorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contractorByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
const contractorByServiceAndCounty = gql`
  query ContractorByServiceAndCounty(
    $service_id: ID
    $county: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelContractorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contractorByServiceAndCounty(
      service_id: $service_id
      county: $county
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
const contractorByServiceAndCountyAndGender = gql`
  query ContractorByServiceAndCountyAndGender(
    $service_id: ID
    $countyGender: ModelContractorByServiceAndCountyAndGenderCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelContractorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contractorByServiceAndCountyAndGender(
      service_id: $service_id
      countyGender: $countyGender
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
const userByGender = gql`
  query UserByGender(
    $gender: GENDER
    $sortDirection: ModelSortDirection
    $filter: ModelContractorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByGender(
      gender: $gender
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;

module.exports = {
  bookingsByContactorAndDate,
  bookingsByServiceAndDate,
  bookingsByUserAndDate,
  getBooking
};
