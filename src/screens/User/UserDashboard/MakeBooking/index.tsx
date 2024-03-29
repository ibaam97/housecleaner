import { MAPS_API } from "@constants/KEYS";
import ROUTES from "@constants/ROUTES";
import MakeBookingSchema from "@schemas/makeBookingSchema";
import ButtonDefault from "@UIComponents/buttons/ButtonDefault";
import FormInput from "@UIComponents/form/FormInput/FormInput";
import Screen from "@UIComponents/layout/Screen";
import Section from "@UIComponents/layout/Section";
import { Card } from "antd";
import { Analytics } from "aws-amplify";
import { Form, Formik, FormikHelpers } from "formik";
import AddressMapHelper from "lib/AddressMapHelper";
import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRootStore } from "store";
import { MakeBookingValues } from "./MakeBookingValues";

export interface IMakeBookingProps {}

export function MakeBooking(props: IMakeBookingProps) {
  const navigate = useNavigate();

  const params = useParams();

  const service_id = params.id;

  console.log("ferferfref");

  const {
    bookingsStore: { createBooking },
    authStore: { user },
  } = useRootStore();

  const initialValues: MakeBookingValues = {
    address: "",
    county: "",
    eircode: "",
    date: "",
  };

  const onSubmit = async (
    values: MakeBookingValues,
    actions: FormikHelpers<MakeBookingValues>
  ) => {
    console.log(values);
    try {
      console.log("hello");
      const booking = await createBooking({ ...values, service_id });
      console.log(booking);
      await Analytics.record({ name: "madeBooking", attributes: {user: user.id, booking: booking.id} });
      navigate(ROUTES.UserDashboard);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen className="flex items-center justify-center">
      <Section className="h-full max-w-200 w-full">
        <Card>
          <Formik
            validationSchema={MakeBookingSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
          >
            {({ handleChange, values, errors }) => (
              <Form>
                <FormInput
                  name="date"
                  placeholder="Date"
                  onChange={handleChange}
                  value={values.date}
                  errors={errors.date}
                  type={"date"}
                />
                <FormInput
                  name="eircode"
                  placeholder="eircode"
                  onChange={handleChange}
                  value={values.eircode}
                  errors={errors.eircode}
                />
                <FormInput
                  name="county"
                  placeholder="county"
                  onChange={handleChange}
                  value={values.county}
                  errors={errors.county}
                />
                <AddressMapHelper
                  name="address"
                  placeholder="address"
                  onChange={handleChange}
                  value={values.address}
                  errors={errors.address}
                  apiKey={MAPS_API}
                />
                <ButtonDefault type="submit">Submit</ButtonDefault>
              </Form>
            )}
          </Formik>
        </Card>
      </Section>
    </Screen>
  );
}

export default MakeBooking;
