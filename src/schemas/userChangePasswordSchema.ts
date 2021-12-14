import REGEX from "@constants/REGEX";
import * as Yup from "yup";

const UserChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().min(8).required("Required"),
  newPassword: Yup.string().min(8).required("Required"),
});

export default UserChangePasswordSchema;
