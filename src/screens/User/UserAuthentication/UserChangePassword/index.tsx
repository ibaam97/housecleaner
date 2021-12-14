import FormInput from "@UIComponents/form/FormInput/FormInput";
import Screen from "@UIComponents/layout/Screen";
import Section from "@UIComponents/layout/Section";
import { Card } from "antd";
import { Form, Formik, FormikHelpers } from "formik";
import { UserChangePasswordValues } from "./UserChangePasswordValues";
import * as React from "react";
import { Routes, useNavigate } from "react-router-dom";
import UserSignInSchema from "@schemas/userSignInSchema";
import ButtonDefault from "@UIComponents/buttons/ButtonDefault";
import ROUTES from "@constants/ROUTES";
import GENDER from "@enums/GENDER";
import { useRootStore } from "store";
import UserChangePasswordSchema from "@schemas/userChangePasswordSchema";

export interface IUserChangePasswordProps {}

export function UserChangePassword(props: IUserChangePasswordProps) {
  const navigate = useNavigate();

  const { authStore } = useRootStore();

  const initialValues: UserChangePasswordValues = {
    oldPassword: "",
    newPassword: "",
  };

  const onSubmit = async (
    values: UserChangePasswordValues,
    actions: FormikHelpers<UserChangePasswordValues>
  ) => {
    try {
      await authStore.changePassword(values);
      navigate(ROUTES.UserDashboard);
      // await authStore.signIn(values);
      // await authStore.getUserProfile();
    } catch (error) {
      // actions.setSubmitting(false);
    }
  };

  return (
    <Card>
      <Formik
        validationSchema={UserChangePasswordSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({ handleChange, values, errors }) => (
          <Form>
            <FormInput
              name="oldPassword"
              placeholder="Old Password"
              onChange={handleChange}
              value={values.oldPassword}
              errors={errors.oldPassword}
              type="password"
            />
            <FormInput
              name="newPassword"
              placeholder="New Password"
              onChange={handleChange}
              value={values.newPassword}
              errors={errors.newPassword}
              type="password"
            />
            <ButtonDefault type="submit">Submit</ButtonDefault>
            {Object.values(errors)}
          </Form>
        )}
      </Formik>
    </Card>
  );
}

export default UserChangePassword;
