import FormInput from "@UIComponents/form/FormInput/FormInput";
import Screen from "@UIComponents/layout/Screen";
import Section from "@UIComponents/layout/Section";
import { Card } from "antd";
import { Form, Formik, FormikHelpers } from "formik";
import { UserSignInValues } from "./UserSignInValues";
import * as React from "react";
import { Routes, useNavigate } from "react-router-dom";
import UserSignInSchema from "@schemas/userSignInSchema";
import ButtonDefault from "@UIComponents/buttons/ButtonDefault";
import ROUTES from "@constants/ROUTES";
import GENDER from "@enums/GENDER";
import { useRootStore } from "store";

export interface IContractorSignInProps {}

export function ContractorSignIn(props: IContractorSignInProps) {
  const navigate = useNavigate();

  const { authStore } = useRootStore();

  const initialValues: UserSignInValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (
    values: UserSignInValues,
    actions: FormikHelpers<UserSignInValues>
  ) => {
    try {
      await authStore.signIn(values);
      navigate(ROUTES.ContractorDashboard);
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
            validationSchema={UserSignInSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
          >
            {({ handleChange, values, errors }) => (
              <Form>
                <FormInput
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                  value={values.email}
                  errors={errors.email}
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

export default ContractorSignIn;
