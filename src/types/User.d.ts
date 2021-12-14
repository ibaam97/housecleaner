import GENDER from "@enums/GENDER";
import USER_TYPE from "@enums/USER_TYPE.enum";
import Id from "./Id";

type User = {
  firstname: string;
  lastname: string;
  email: string;
  id?: Id;
  phone?: string;
  gender?: GENDER;
  type?: USER_TYPE;
} & Address;

export default User;
