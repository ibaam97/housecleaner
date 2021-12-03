/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBooking = /* GraphQL */ `
  subscription OnCreateBooking {
    onCreateBooking {
      id
      date
      address
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
        owner
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
        image
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
export const onUpdateBooking = /* GraphQL */ `
  subscription OnUpdateBooking {
    onUpdateBooking {
      id
      date
      address
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
        owner
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
        image
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
export const onDeleteBooking = /* GraphQL */ `
  subscription OnDeleteBooking {
    onDeleteBooking {
      id
      date
      address
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
        owner
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
        image
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
      owner
    }
  }
`;
export const onCreateContractor = /* GraphQL */ `
  subscription OnCreateContractor {
    onCreateContractor {
      firstname
      lastname
      email
      address
      county
      eircode
      id
      image
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
export const onUpdateContractor = /* GraphQL */ `
  subscription OnUpdateContractor {
    onUpdateContractor {
      firstname
      lastname
      email
      address
      county
      eircode
      id
      image
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
export const onDeleteContractor = /* GraphQL */ `
  subscription OnDeleteContractor {
    onDeleteContractor {
      firstname
      lastname
      email
      address
      county
      eircode
      id
      image
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
export const onCreateService = /* GraphQL */ `
  subscription OnCreateService {
    onCreateService {
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
export const onUpdateService = /* GraphQL */ `
  subscription OnUpdateService {
    onUpdateService {
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
export const onDeleteService = /* GraphQL */ `
  subscription OnDeleteService {
    onDeleteService {
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
