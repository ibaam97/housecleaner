import { FormikValues } from "formik";
import User from "types/User";

export interface UserSettingsValues extends FormikValues, User, Address {
}
