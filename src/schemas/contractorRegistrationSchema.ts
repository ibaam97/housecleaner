import * as Yup from "yup";

const UserRegistrationSchema = Yup.object().shape({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
  county: Yup.string().required("Required"),
  eircode: Yup.string().required("Required"),
});

export default UserRegistrationSchema;
