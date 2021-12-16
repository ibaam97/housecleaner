import { string } from "yup/lib/locale";
import Id from "./Id";

export type Service = {
  name: string,
  id: Id,
  description: string,
};

export default Service