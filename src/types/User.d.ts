import GENDER from "@enums/GENDER";
import Id from "./Id";

type User = {
  firstname: string;
  lastname: string;
  email: string;
  id?: Id;
  phone?: string;
  gender?: GENDER;
} & Address;

export default User;
