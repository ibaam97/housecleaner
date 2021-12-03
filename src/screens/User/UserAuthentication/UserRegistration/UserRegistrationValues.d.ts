import { FormikValues } from "formik";
import User from "types/User";

export interface UserRegistrationValues extends FormikValues, User, Address {
  password: string;
}
