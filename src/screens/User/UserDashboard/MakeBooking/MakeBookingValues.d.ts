import { FormikValues } from "formik";
import { Booking } from "types/Booking";
import User from "types/User";

export interface MakeBookingValues extends FormikValues, Booking, Address {}
