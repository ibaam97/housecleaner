import BOOKING_STATUS from "enums/booking_status.enu";
import Contractor from "./Contractor";
import Id from "./Id";
import Service from "./Service";

type Booking = {
  user_id?: Id;
  id?: Id;
  contractor_id?: Id;
  date: string;
  user?: User;
  contractor?: Contractor;
  service?: Service;
  service_id?: Id;
  booking_status?: BOOKING_STATUS
} & Address;
