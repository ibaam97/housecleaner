import BOOKING_STATUS from "enums/BOOKING_STATUS.enum";
import Contractor from "./Contractor";
import Id from "./Id";
import Service from "./Service";
import User from "./User";

export type Booking = {
  user_id?: Id;
  id?: Id;
  contractor_id?: Id;
  date: string;
  user?: User;
  contractor?: Contractor;
  service?: Service;
  service_id?: Id;
  booking_status?: BOOKING_STATUS;
  checkin_time?: string;
  checkout_time?: string;
  comment?: string
  rating?: number
} & Address;

export default Booking