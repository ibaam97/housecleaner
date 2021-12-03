import * as Yup from "yup";

const MakeBookingSchema = Yup.object().shape({
  county: Yup.string().required("Required"),
  eircode: Yup.string().required("Required"),
  date: Yup.date().required("Required").min(new Date()),
});

export default MakeBookingSchema;
