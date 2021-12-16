import GENDER from "@enums/GENDER";
import Id from "./Id";
import Service from "./Service";

export type Contractor = {
  firstname: string;
  lastname: string;
  email: string;
  id?: Id;
  image?: string;
  service?: Service;
  service_id?: Id;
  phone?: string;
  type?: USER_TYPE;
  gender?: GENDER;
  account?: number;
  rating?: number;
  ratingNumber?: number;
  image?: string;
} & Address;

export default Contractor;
