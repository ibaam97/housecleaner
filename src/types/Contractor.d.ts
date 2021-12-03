import Id from "./Id";
import Service from "./Service";

type Contractor = {
  firstname: string;
  lastname: string;
  email: string;
  id?: Id;
  image?: string;
  service?: Service;
  service_id?: Id;
  phone?: string;
  type?: USER_TYPE;
} & Address;

export default Contractor;
