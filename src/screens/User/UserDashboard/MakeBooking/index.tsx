import MakeBookingSchema from "@schemas/makeBookingSchema";
import ButtonDefault from "@UIComponents/buttons/ButtonDefault";
import FormInput from "@UIComponents/form/FormInput/FormInput";
import Screen from "@UIComponents/layout/Screen";
import Section from "@UIComponents/layout/Section";
import { Card } from "antd";
import { Form, Formik, FormikHelpers } from "formik";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { MakeBookingValues } from "./MakeBookingValues";

export interface IMakeBookingProps {}

export function MakeBooking(props: IMakeBookingProps) {
  const navigate = useNavigate();

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
      // navigate("/user/dashboard");
      // await authStore.signIn(values);
      // await authStore.getUserProfile();
    } catch (error) {
      // actions.setSubmitting(false);
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
                <FormInput
                  name="address"
                  placeholder="address"
                  onChange={handleChange}
                  value={values.address}
                  errors={errors.address}
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

export default MakeBooking