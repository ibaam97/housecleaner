/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
      id
      date
      address
      county
      eircode
      user_id
      contractor_id
      service_id
      booking_status
      checkin_time
      checkout_time
      payment_id
      comment
      rating
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
        image
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
        account
        rating
        ratingNumber
        image
        createdAt
        updatedAt
      }
      service {
        name
        id
        description
        pricePerMinute
        createdAt
        updatedAt
      }
      payment {
        amount
        id
        currency
        date
        user_id
        contractor_id
        booking_id
        createdAt
        updatedAt
      }
    }
  }
`;
export const listBookings = /* GraphQL */ `
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
      checkin_time
      checkout_time
      payment_id
      comment
      rating
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
        image
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
        account
        rating
        ratingNumber
        image
        createdAt
        updatedAt
      }
      service {
        name
        id
        description
        pricePerMinute
        createdAt
        updatedAt
      }
      payment {
        amount
        id
        currency
        date
        user_id
        contractor_id
        booking_id
        createdAt
        updatedAt
      }
      }
      nextToken
    }
  }
`;
export const bookingsByUserAndDate = /* GraphQL */ `
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
      checkin_time
      checkout_time
      payment_id
      comment
      rating
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
        image
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
        account
        rating
        ratingNumber
        image
        createdAt
        updatedAt
      }
      service {
        name
        id
        description
        pricePerMinute
        createdAt
        updatedAt
      }
      payment {
        amount
        id
        currency
        date
        user_id
        contractor_id
        booking_id
        createdAt
        updatedAt
      }
      }
      nextToken
    }
  }
`;
export const bookingsByContactorAndDate = /* GraphQL */ `
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
      checkin_time
      checkout_time
      payment_id
      comment
      rating
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
        image
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
        account
        rating
        ratingNumber
        image
        createdAt
        updatedAt
      }
      service {
        name
        id
        description
        pricePerMinute
        createdAt
        updatedAt
      }
      payment {
        amount
        id
        currency
        date
        user_id
        contractor_id
        booking_id
        createdAt
        updatedAt
      }
      }
      nextToken
    }
  }
`;
export const bookingsByServiceAndDate = /* GraphQL */ `
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
      checkin_time
      checkout_time
      payment_id
      comment
      rating
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
        image
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
        account
        rating
        ratingNumber
        image
        createdAt
        updatedAt
      }
      service {
        name
        id
        description
        pricePerMinute
        createdAt
        updatedAt
      }
      payment {
        amount
        id
        currency
        date
        user_id
        contractor_id
        booking_id
        createdAt
        updatedAt
      }
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
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
      gender
      image
      createdAt
      updatedAt
      bookings {
        nextToken
      }
      payments {
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
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
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userByEmail = /* GraphQL */ `
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
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userByCountyAndGender = /* GraphQL */ `
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
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContractor = /* GraphQL */ `
  query GetContractor($id: ID!) {
    getContractor(id: $id) {
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
      account
      rating
      ratingNumber
      image
      createdAt
      updatedAt
      bookings {
        nextToken
      }
      service {
        name
        id
        description
        pricePerMinute
        createdAt
        updatedAt
      }
    }
  }
`;
export const listContractors = /* GraphQL */ `
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
        account
        rating
        ratingNumber
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const contractorByEmail = /* GraphQL */ `
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
        account
        rating
        ratingNumber
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const contractorByServiceAndCounty = /* GraphQL */ `
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
        account
        rating
        ratingNumber
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const contractorByServiceAndCountyAndGender = /* GraphQL */ `
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
        account
        rating
        ratingNumber
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userByGender = /* GraphQL */ `
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
        account
        rating
        ratingNumber
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getService = /* GraphQL */ `
  query GetService($id: ID!) {
    getService(id: $id) {
      name
      id
      description
      pricePerMinute
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
export const listServices = /* GraphQL */ `
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
        pricePerMinute
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
      amount
      id
      currency
      date
      user_id
      contractor_id
      booking_id
      createdAt
      updatedAt
      booking {
        id
        date
        address
        county
        eircode
        user_id
        contractor_id
        service_id
        booking_status
        checkin_time
        checkout_time
        payment_id
        comment
        rating
        createdAt
        updatedAt
      }
    }
  }
`;
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        amount
        id
        currency
        date
        user_id
        contractor_id
        booking_id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const paymentsByUserAndDate = /* GraphQL */ `
  query PaymentsByUserAndDate(
    $user_id: ID
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    paymentsByUserAndDate(
      user_id: $user_id
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        amount
        id
        currency
        date
        user_id
        contractor_id
        booking_id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
