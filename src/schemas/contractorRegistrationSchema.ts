import REGEX from "@constants/REGEX";
import * as Yup from "yup";

const Contractor = Yup.object().shape({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  phone: Yup.string()
    .matches(REGEX.phone, "Phone number is not valid")
    .required("Required"),
  password: Yup.string().min(8).required("Required"),
  email: Yup.string().email().required("Required"),
  county: Yup.string().required("Required"),
  eircode: Yup.string().required("Required"),
  address: Yup.string().required("Required")
});

export default Contractor;
