import { FormikValues } from "formik";
import Contractor from "types/Contractor";
import User from "types/User";

export interface ContractorSettingsValues
  extends FormikValues,
    Contractor,
    Address {}
