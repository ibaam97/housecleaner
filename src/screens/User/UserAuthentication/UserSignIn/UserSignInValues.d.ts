import { FormikValues } from "formik";
import User from "types/User";

export interface UserSignInValues extends FormikValues {
  email: string
  password: string;
}
