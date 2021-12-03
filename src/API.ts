/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBookingInput = {
  id?: string | null,
  date: string,
  address: string,
  user_id: string,
  contractor_id?: string | null,
  service_id: string,
  booking_status: BOOKING_STATUS,
};

export enum BOOKING_STATUS {
  UNASSIGNED = "UNASSIGNED",
  ASSIGNED = "ASSIGNED",
  ONGOING = "ONGOING",
  COMPLETED = "COMPLETED",
  PAID = "PAID",
}


export type ModelBookingConditionInput = {
  date?: ModelStringInput | null,
  address?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  contractor_id?: ModelIDInput | null,
  service_id?: ModelIDInput | null,
  booking_status?: ModelBOOKING_STATUSInput | null,
  and?: Array< ModelBookingConditionInput | null > | null,
  or?: Array< ModelBookingConditionInput | null > | null,
  not?: ModelBookingConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBOOKING_STATUSInput = {
  eq?: BOOKING_STATUS | null,
  ne?: BOOKING_STATUS | null,
};

export type Booking = {
  __typename: "Booking",
  id: string,
  date: string,
  address: string,
  user: User,
  user_id: string,
  contractor?: Contractor | null,
  contractor_id?: string | null,
  service: Service,
  service_id: string,
  booking_status: BOOKING_STATUS,
  createdAt: string,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  firstname: string,
  lastname: string,
  email: string,
  address: string,
  county: string,
  eircode: string,
  phone: string,
  bookings?: ModelBookingConnection | null,
  gender?: GENDER | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelBookingConnection = {
  __typename: "ModelBookingConnection",
  items?:  Array<Booking | null > | null,
  nextToken?: string | null,
};

export enum GENDER {
  MALE = "MALE",
  FEMALE = "FEMALE",
  NON_BINARY = "NON_BINARY",
}


export type Contractor = {
  __typename: "Contractor",
  firstname: string,
  lastname: string,
  email: string,
  address: string,
  county: string,
  eircode: string,
  id: string,
  image?: string | null,
  bookings?: ModelBookingConnection | null,
  service: Service,
  service_id: string,
  gender: GENDER,
  phone: string,
  createdAt: string,
  updatedAt: string,
};

export type Service = {
  __typename: "Service",
  name: string,
  id: string,
  description: string,
  bookings?: ModelBookingConnection | null,
  contractors?: ModelContractorConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelContractorConnection = {
  __typename: "ModelContractorConnection",
  items?:  Array<Contractor | null > | null,
  nextToken?: string | null,
};

export type UpdateBookingInput = {
  id: string,
  date?: string | null,
  address?: string | null,
  user_id?: string | null,
  contractor_id?: string | null,
  service_id?: string | null,
  booking_status?: BOOKING_STATUS | null,
};

export type DeleteBookingInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  firstname: string,
  lastname: string,
  email: string,
  address: string,
  county: string,
  eircode: string,
  phone: string,
  gender?: GENDER | null,
};

export type ModelUserConditionInput = {
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  address?: ModelStringInput | null,
  county?: ModelStringInput | null,
  eircode?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  gender?: ModelGENDERInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelGENDERInput = {
  eq?: GENDER | null,
  ne?: GENDER | null,
};

export type UpdateUserInput = {
  id: string,
  firstname?: string | null,
  lastname?: string | null,
  email?: string | null,
  address?: string | null,
  county?: string | null,
  eircode?: string | null,
  phone?: string | null,
  gender?: GENDER | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateContractorInput = {
  firstname: string,
  lastname: string,
  email: string,
  address: string,
  county: string,
  eircode: string,
  id?: string | null,
  image?: string | null,
  service_id: string,
  gender: GENDER,
  phone: string,
};

export type ModelContractorConditionInput = {
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  address?: ModelStringInput | null,
  county?: ModelStringInput | null,
  eircode?: ModelStringInput | null,
  image?: ModelStringInput | null,
  service_id?: ModelIDInput | null,
  gender?: ModelGENDERInput | null,
  phone?: ModelStringInput | null,
  and?: Array< ModelContractorConditionInput | null > | null,
  or?: Array< ModelContractorConditionInput | null > | null,
  not?: ModelContractorConditionInput | null,
};

export type UpdateContractorInput = {
  firstname?: string | null,
  lastname?: string | null,
  email?: string | null,
  address?: string | null,
  county?: string | null,
  eircode?: string | null,
  id: string,
  image?: string | null,
  service_id?: string | null,
  gender?: GENDER | null,
  phone?: string | null,
};

export type DeleteContractorInput = {
  id: string,
};

export type CreateServiceInput = {
  name: string,
  id?: string | null,
  description: string,
};

export type ModelServiceConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelServiceConditionInput | null > | null,
  or?: Array< ModelServiceConditionInput | null > | null,
  not?: ModelServiceConditionInput | null,
};

export type UpdateServiceInput = {
  name?: string | null,
  id: string,
  description?: string | null,
};

export type DeleteServiceInput = {
  id: string,
};

export type ModelBookingFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  address?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  contractor_id?: ModelIDInput | null,
  service_id?: ModelIDInput | null,
  booking_status?: ModelBOOKING_STATUSInput | null,
  and?: Array< ModelBookingFilterInput | null > | null,
  or?: Array< ModelBookingFilterInput | null > | null,
  not?: ModelBookingFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  address?: ModelStringInput | null,
  county?: ModelStringInput | null,
  eircode?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  gender?: ModelGENDERInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelContractorFilterInput = {
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  address?: ModelStringInput | null,
  county?: ModelStringInput | null,
  eircode?: ModelStringInput | null,
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  service_id?: ModelIDInput | null,
  gender?: ModelGENDERInput | null,
  phone?: ModelStringInput | null,
  and?: Array< ModelContractorFilterInput | null > | null,
  or?: Array< ModelContractorFilterInput | null > | null,
  not?: ModelContractorFilterInput | null,
};

export type ModelServiceFilterInput = {
  name?: ModelStringInput | null,
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelServiceFilterInput | null > | null,
  or?: Array< ModelServiceFilterInput | null > | null,
  not?: ModelServiceFilterInput | null,
};

export type ModelServiceConnection = {
  __typename: "ModelServiceConnection",
  items?:  Array<Service | null > | null,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelContractorByServiceAndCountyAndGenderCompositeKeyConditionInput = {
  eq?: ModelContractorByServiceAndCountyAndGenderCompositeKeyInput | null,
  le?: ModelContractorByServiceAndCountyAndGenderCompositeKeyInput | null,
  lt?: ModelContractorByServiceAndCountyAndGenderCompositeKeyInput | null,
  ge?: ModelContractorByServiceAndCountyAndGenderCompositeKeyInput | null,
  gt?: ModelContractorByServiceAndCountyAndGenderCompositeKeyInput | null,
  between?: Array< ModelContractorByServiceAndCountyAndGenderCompositeKeyInput | null > | null,
  beginsWith?: ModelContractorByServiceAndCountyAndGenderCompositeKeyInput | null,
};

export type ModelContractorByServiceAndCountyAndGenderCompositeKeyInput = {
  county?: string | null,
  gender?: GENDER | null,
};

export type CreateBookingMutationVariables = {
  input: CreateBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type CreateBookingMutation = {
  createBooking?:  {
    __typename: "Booking",
    id: string,
    date: string,
    address: string,
    user:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      address: string,
      county: string,
      eircode: string,
      phone: string,
      gender?: GENDER | null,
      createdAt: string,
      updatedAt: string,
    },
    user_id: string,
    contractor?:  {
      __typename: "Contractor",
      firstname: string,
      lastname: string,
      email: string,
      address: string,
      county: string,
      eircode: string,
      id: string,
      image?: string | null,
      service_id: string,
      gender: GENDER,
      phone: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    contractor_id?: string | null,
    service:  {
      __typename: "Service",
      name: string,
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    },
    service_id: string,
    booking_status: BOOKING_STATUS,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBookingMutationVariables = {
  input: UpdateBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type UpdateBookingMutation = {
  updateBooking?:  {
    __typename: "Booking",
    id: string,
    date: string,
    address: string,
    user:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      address: string,
      county: string,
      eircode: string,
      phone: string,
      gender?: GENDER | null,
      createdAt: string,
      updatedAt: string,
    },
    user_id: string,
    contractor?:  {
      __typename: "Contractor",
      firstname: string,
      lastname: string,
      email: string,
      address: string,
      county: string,
      eircode: string,
      id: string,
      image?: string | null,
      service_id: string,
      gender: GENDER,
      phone: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    contractor_id?: string | null,
    service:  {
      __typename: "Service",
      name: string,
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    },
    service_id: string,
    booking_status: BOOKING_STATUS,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBookingMutationVariables = {
  input: DeleteBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type DeleteBookingMutation = {
  deleteBooking?:  {
    __typename: "Booking",
    id: string,
    date: string,
    address: string,
    user:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      address: string,
      county: string,
      eircode: string,
      phone: string,
      gender?: GENDER | null,
      createdAt: string,
      updatedAt: string,
    },
    user_id: string,
    contractor?:  {
      __typename: "Contractor",
      firstname: string,
      lastname: string,
      email: string,
      address: string,
      county: string,
      eircode: string,
      id: string,
      image?: string | null,
      service_id: string,
      gender: GENDER,
      phone: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    contractor_id?: string | null,
    service:  {
      __typename: "Service",
      name: string,
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    },
    service_id: string,
    booking_status: BOOKING_STATUS,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    address: string,
    county: string,
    eircode: string,
    phone: string,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    gender?: GENDER | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    address: string,
    county: string,
    eircode: string,
    phone: string,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    gender?: GENDER | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    address: string,
    county: string,
    eircode: string,
    phone: string,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    gender?: GENDER | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContractorMutationVariables = {
  input: CreateContractorInput,
  condition?: ModelContractorConditionInput | null,
};

export type CreateContractorMutation = {
  createContractor?:  {
    __typename: "Contractor",
    firstname: string,
    lastname: string,
    email: string,
    address: string,
    county: string,
    eircode: string,
    id: string,
    image?: string | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    service:  {
      __typename: "Service",
      name: string,
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    },
    service_id: string,
    gender: GENDER,
    phone: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContractorMutationVariables = {
  input: UpdateContractorInput,
  condition?: ModelContractorConditionInput | null,
};

export type UpdateContractorMutation = {
  updateContractor?:  {
    __typename: "Contractor",
    firstname: string,
    lastname: string,
    email: string,
    address: string,
    county: string,
    eircode: string,
    id: string,
    image?: string | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    service:  {
      __typename: "Service",
      name: string,
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    },
    service_id: string,
    gender: GENDER,
    phone: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContractorMutationVariables = {
  input: DeleteContractorInput,
  condition?: ModelContractorConditionInput | null,
};

export type DeleteContractorMutation = {
  deleteContractor?:  {
    __typename: "Contractor",
    firstname: string,
    lastname: string,
    email: string,
    address: string,
    county: string,
    eircode: string,
    id: string,
    image?: string | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    service:  {
      __typename: "Service",
      name: string,
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    },
    service_id: string,
    gender: GENDER,
    phone: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateServiceMutationVariables = {
  input: CreateServiceInput,
  condition?: ModelServiceConditionInput | null,
};

export type CreateServiceMutation = {
  createService?:  {
    __typename: "Service",
    name: string,
    id: string,
    description: string,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    contractors?:  {
      __typename: "ModelContractorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateServiceMutationVariables = {
  input: UpdateServiceInput,
  condition?: ModelServiceConditionInput | null,
};

export type UpdateServiceMutation = {
  updateService?:  {
    __typename: "Service",
    name: string,
    id: string,
    description: string,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    contractors?:  {
      __typename: "ModelContractorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteServiceMutationVariables = {
  input: DeleteServiceInput,
  condition?: ModelServiceConditionInput | null,
};

export type DeleteServiceMutation = {
  deleteService?:  {
    __typename: "Service",
    name: string,
    id: string,
    description: string,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    contractors?:  {
      __typename: "ModelContractorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBookingQueryVariables = {
  id: string,
};

export type GetBookingQuery = {
  getBooking?:  {
    __typename: "Booking",
    id: string,
    date: string,
    address: string,
    user:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      address: string,
      county: string,
      eircode: string,
      phone: string,
      gender?: GENDER | null,
      createdAt: string,
      updatedAt: string,
    },
    user_id: string,
    contractor?:  {
      __typename: "Contractor",
      firstname: string,
      lastname: string,
      email: string,
      address: string,
      county: string,
      eircode: string,
      id: string,
      image?: string | null,
      service_id: string,
      gender: GENDER,
      phone: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    contractor_id?: string | null,
    service:  {
      __typename: "Service",
      name: string,
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    },
    service_id: string,
    booking_status: BOOKING_STATUS,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBookingsQueryVariables = {
  filter?: ModelBookingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookingsQuery = {
  listBookings?:  {
    __typename: "ModelBookingConnection",
    items?:  Array< {
      __typename: "Booking",
      id: string,
      date: string,
      address: string,
      user_id: string,
      contractor_id?: string | null,
      service_id: string,
      booking_status: BOOKING_STATUS,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    address: string,
    county: string,
    eircode: string,
    phone: string,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    gender?: GENDER | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      address: string,
      county: string,
      eircode: string,
      phone: string,
      gender?: GENDER | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetContractorQueryVariables = {
  id: string,
};

export type GetContractorQuery = {
  getContractor?:  {
    __typename: "Contractor",
    firstname: string,
    lastname: string,
    email: string,
    address: string,
    county: string,
    eircode: string,
    id: string,
    image?: string | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    service:  {
      __typename: "Service",
      name: string,
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    },
    service_id: string,
    gender: GENDER,
    phone: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContractorsQueryVariables = {
  filter?: ModelContractorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContractorsQuery = {
  listContractors?:  {
    __typename: "ModelContractorConnection",
    items?:  Array< {
      __typename: "Contractor",
      firstname: string,
      lastname: string,
      email: string,
      address: string,
      county: string,
      eircode: string,
      id: string,
      image?: string | null,
      service_id: string,
      gender: GENDER,
      phone: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetServiceQueryVariables = {
  id: string,
};

export type GetServiceQuery = {
  getService?:  {
    __typename: "Service",
    name: string,
    id: string,
    description: string,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    contractors?:  {
      __typename: "ModelContractorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListServicesQueryVariables = {
  filter?: ModelServiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListServicesQuery = {
  listServices?:  {
    __typename: "ModelServiceConnection",
    items?:  Array< {
      __typename: "Service",
      name: string,
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type BookingsByUserAndDateQueryVariables = {
  user_id?: string | null,
  date?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBookingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BookingsByUserAndDateQuery = {
  bookingsByUserAndDate?:  {
    __typename: "ModelBookingConnection",
    items?:  Array< {
      __typename: "Booking",
      id: string,
      date: string,
      address: string,
      user_id: string,
      contractor_id?: string | null,
      service_id: string,
      booking_status: BOOKING_STATUS,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type BookingsByContactorAndDateQueryVariables = {
  contractor_id?: string | null,
  date?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBookingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BookingsByContactorAndDateQuery = {
  bookingsByContactorAndDate?:  {
    __typename: "ModelBookingConnection",
    items?:  Array< {
      __typename: "Booking",
      id: string,
      date: string,
      address: string,
      user_id: string,
      contractor_id?: string | null,
      service_id: string,
      booking_status: BOOKING_STATUS,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type BookingsByServiceAndDateQueryVariables = {
  service_id?: string | null,
  date?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBookingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BookingsByServiceAndDateQuery = {
  bookingsByServiceAndDate?:  {
    __typename: "ModelBookingConnection",
    items?:  Array< {
      __typename: "Booking",
      id: string,
      date: string,
      address: string,
      user_id: string,
      contractor_id?: string | null,
      service_id: string,
      booking_status: BOOKING_STATUS,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type UserByEmailQueryVariables = {
  email?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserByEmailQuery = {
  userByEmail?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      address: string,
      county: string,
      eircode: string,
      phone: string,
      gender?: GENDER | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type UserByCountyAndGenderQueryVariables = {
  county?: string | null,
  gender?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserByCountyAndGenderQuery = {
  userByCountyAndGender?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      address: string,
      county: string,
      eircode: string,
      phone: string,
      gender?: GENDER | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ContractorByEmailQueryVariables = {
  email?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelContractorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ContractorByEmailQuery = {
  contractorByEmail?:  {
    __typename: "ModelContractorConnection",
    items?:  Array< {
      __typename: "Contractor",
      firstname: string,
      lastname: string,
      email: string,
      address: string,
      county: string,
      eircode: string,
      id: string,
      image?: string | null,
      service_id: string,
      gender: GENDER,
      phone: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ContractorByServiceAndCountyQueryVariables = {
  service_id?: string | null,
  county?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelContractorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ContractorByServiceAndCountyQuery = {
  contractorByServiceAndCounty?:  {
    __typename: "ModelContractorConnection",
    items?:  Array< {
      __typename: "Contractor",
      firstname: string,
      lastname: string,
      email: string,
      address: string,
      county: string,
      eircode: string,
      id: string,
      image?: string | null,
      service_id: string,
      gender: GENDER,
      phone: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ContractorByServiceAndCountyAndGenderQueryVariables = {
  service_id?: string | null,
  countyGender?: ModelContractorByServiceAndCountyAndGenderCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelContractorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ContractorByServiceAndCountyAndGenderQuery = {
  contractorByServiceAndCountyAndGender?:  {
    __typename: "ModelContractorConnection",
    items?:  Array< {
      __typename: "Contractor",
      firstname: string,
      lastname: string,
      email: string,
      address: string,
      county: string,
      eircode: string,
      id: string,
      image?: string | null,
      service_id: string,
      gender: GENDER,
      phone: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type UserByGenderQueryVariables = {
  gender?: GENDER | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelContractorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserByGenderQuery = {
  userByGender?:  {
    __typename: "ModelContractorConnection",
    items?:  Array< {
      __typename: "Contractor",
      firstname: string,
      lastname: string,
      email: string,
      address: string,
      county: string,
      eircode: string,
      id: string,
      image?: string | null,
      service_id: string,
      gender: GENDER,
      phone: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBookingSubscription = {
  onCreateBooking?:  {
    __typename: "Booking",
    id: string,
    date: string,
    address: string,
    user:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      address: string,
      county: string,
      eircode: string,
      phone: string,
      gender?: GENDER | null,
      createdAt: string,
      updatedAt: string,
    },
    user_id: string,
    contractor?:  {
      __typename: "Contractor",
      firstname: string,
      lastname: string,
      email: string,
      address: string,
      county: string,
      eircode: string,
      id: string,
      image?: string | null,
      service_id: string,
      gender: GENDER,
      phone: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    contractor_id?: string | null,
    service:  {
      __typename: "Service",
      name: string,
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    },
    service_id: string,
    booking_status: BOOKING_STATUS,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBookingSubscription = {
  onUpdateBooking?:  {
    __typename: "Booking",
    id: string,
    date: string,
    address: string,
    user:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      address: string,
      county: string,
      eircode: string,
      phone: string,
      gender?: GENDER | null,
      createdAt: string,
      updatedAt: string,
    },
    user_id: string,
    contractor?:  {
      __typename: "Contractor",
      firstname: string,
      lastname: string,
      email: string,
      address: string,
      county: string,
      eircode: string,
      id: string,
      image?: string | null,
      service_id: string,
      gender: GENDER,
      phone: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    contractor_id?: string | null,
    service:  {
      __typename: "Service",
      name: string,
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    },
    service_id: string,
    booking_status: BOOKING_STATUS,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBookingSubscription = {
  onDeleteBooking?:  {
    __typename: "Booking",
    id: string,
    date: string,
    address: string,
    user:  {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      address: string,
      county: string,
      eircode: string,
      phone: string,
      gender?: GENDER | null,
      createdAt: string,
      updatedAt: string,
    },
    user_id: string,
    contractor?:  {
      __typename: "Contractor",
      firstname: string,
      lastname: string,
      email: string,
      address: string,
      county: string,
      eircode: string,
      id: string,
      image?: string | null,
      service_id: string,
      gender: GENDER,
      phone: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    contractor_id?: string | null,
    service:  {
      __typename: "Service",
      name: string,
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    },
    service_id: string,
    booking_status: BOOKING_STATUS,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    address: string,
    county: string,
    eircode: string,
    phone: string,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    gender?: GENDER | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    address: string,
    county: string,
    eircode: string,
    phone: string,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    gender?: GENDER | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    address: string,
    county: string,
    eircode: string,
    phone: string,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    gender?: GENDER | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContractorSubscription = {
  onCreateContractor?:  {
    __typename: "Contractor",
    firstname: string,
    lastname: string,
    email: string,
    address: string,
    county: string,
    eircode: string,
    id: string,
    image?: string | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    service:  {
      __typename: "Service",
      name: string,
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    },
    service_id: string,
    gender: GENDER,
    phone: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContractorSubscription = {
  onUpdateContractor?:  {
    __typename: "Contractor",
    firstname: string,
    lastname: string,
    email: string,
    address: string,
    county: string,
    eircode: string,
    id: string,
    image?: string | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    service:  {
      __typename: "Service",
      name: string,
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    },
    service_id: string,
    gender: GENDER,
    phone: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContractorSubscription = {
  onDeleteContractor?:  {
    __typename: "Contractor",
    firstname: string,
    lastname: string,
    email: string,
    address: string,
    county: string,
    eircode: string,
    id: string,
    image?: string | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    service:  {
      __typename: "Service",
      name: string,
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    },
    service_id: string,
    gender: GENDER,
    phone: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateServiceSubscription = {
  onCreateService?:  {
    __typename: "Service",
    name: string,
    id: string,
    description: string,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    contractors?:  {
      __typename: "ModelContractorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateServiceSubscription = {
  onUpdateService?:  {
    __typename: "Service",
    name: string,
    id: string,
    description: string,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    contractors?:  {
      __typename: "ModelContractorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteServiceSubscription = {
  onDeleteService?:  {
    __typename: "Service",
    name: string,
    id: string,
    description: string,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    contractors?:  {
      __typename: "ModelContractorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
