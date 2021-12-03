export interface User {
  id?: number;
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  sentianceId?: string;
  installId?: string;
  isSubUser?: boolean;
  otp?: string;
  isActive?: boolean;
  role?: string; // todo: change to enum
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  version?: number;
  profileInformation?: {
    id: number;
    dateOfBirth?: string;
    phoneNumber?: string;
    homeAddress?: string;
    workAddress?: string;
  };
}
