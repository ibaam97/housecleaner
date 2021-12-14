import REGEX from "@constants/REGEX";
import * as Yup from "yup";

const UserSignInSchema = Yup.object().shape({
  password: Yup.string().min(8).required("Required"),
  email: Yup.string().email().required("Required"),
});

export default UserSignInSchema;
