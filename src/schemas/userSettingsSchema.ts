import REGEX from "@constants/REGEX";
import * as Yup from "yup";

const UserSettingsSchema = Yup.object().shape({
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  phone: Yup.string()
    .matches(REGEX.phone, "Phone number is not valid")
    .required(),
  email: Yup.string().email().required(),
  county: Yup.string().required(),
  eircode: Yup.string().required(),
  address: Yup.string().required(),
});

export default UserSettingsSchema;
