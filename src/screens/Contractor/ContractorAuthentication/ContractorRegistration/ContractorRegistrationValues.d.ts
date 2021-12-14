import { FormikValues } from "formik";
import Contractor from "types/Contractor";
import User from "types/User";

export interface ContractorRegistrationValues extends FormikValues, Contractor, Address {
    password: string!
}
