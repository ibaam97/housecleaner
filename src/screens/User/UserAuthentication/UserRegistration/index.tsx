import FormInput from "@UIComponents/form/FormInput/FormInput";
import Screen from "@UIComponents/layout/Screen";
import Section from "@UIComponents/layout/Section";
import { Card } from "antd";
import { Form, Formik, FormikHelpers } from "formik";
import { UserRegistrationValues } from "./UserRegistrationValues";
import * as React from "react";
import { Routes, useNavigate } from "react-router-dom";
import UserRegistrationSchema from "@schemas/userRegistrationSchema";
import ButtonDefault from "@UIComponents/buttons/ButtonDefault";
import ROUTES from "@constants/ROUTES";
import GENDER from "@enums/GENDER";
import { useRootStore } from "store";
import USER_TYPE from "@enums/USER_TYPE.enum";

export interface IUserRegistrationProps {}

export function UserRegistration(props: IUserRegistrationProps) {
  const navigate = useNavigate();

  const { authStore } = useRootStore();

  const initialValues: UserRegistrationValues = {
    county: "",
    email: "",
    eircode: "",
    firstname: "",
    lastname: "",
    password: "",
    address: "",
    phone: "",
    gender: GENDER.Male,
  };

  const onSubmit = async (
    values: UserRegistrationValues,
    actions: FormikHelpers<UserRegistrationValues>
  ) => {
    try {
      await authStore.signUp({...values, type: USER_TYPE.Admin});
      navigate(ROUTES.UserVerifyUser);
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
            validationSchema={UserRegistrationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
          >
            {({ handleChange, values, errors }) => (
              <Form>
                <FormInput
                  name="firstname"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={values.firstName}
                  errors={errors.firstName}
                />
                <FormInput
                  name="lastname"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={values.lastname}
                  errors={errors.lastname}
                />
                <FormInput
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                  value={values.email}
                  errors={errors.email}
                />
                <FormInput
                  name="phone"
                  placeholder="phone"
                  onChange={handleChange}
                  value={values.phone}
                  errors={errors.phone}
                />
                <FormInput
                  name="gender"
                  placeholder="gender"
                  onChange={handleChange}
                  value={values.gender}
                  errors={errors.gender}
                />
                <FormInput
                  name="county"
                  placeholder="county"
                  onChange={handleChange}
                  value={values.county}
                  errors={errors.county}
                />
                <FormInput
                  name="eircode"
                  placeholder="eircode"
                  onChange={handleChange}
                  value={values.eircode}
                  errors={errors.eircode}
                />
                <FormInput
                  name="address"
                  placeholder="address"
                  onChange={handleChange}
                  value={values.address}
                  errors={errors.address}
                />
                <FormInput
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                  value={values.password}
                  errors={errors.password}
                  type="password"
                />
                <ButtonDefault type="submit">Submit</ButtonDefault>
                {Object.values(errors)}
              </Form>
            )}
          </Formik>
        </Card>
      </Section>
    </Screen>
  );
}

export default UserRegistration;
