import { FormikValues } from "formik";
import User from "types/User";

export interface UserChangePasswordValues extends FormikValues {
  oldPassword: string;
  newPassword: string;
}
