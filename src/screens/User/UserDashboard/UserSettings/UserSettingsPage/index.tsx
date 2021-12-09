import FormInput from "@UIComponents/form/FormInput/FormInput";
import Screen from "@UIComponents/layout/Screen";
import Section from "@UIComponents/layout/Section";
import { Card } from "antd";
import { Form, Formik, FormikHelpers } from "formik";
import { UserSettingsValues } from "./UserSettingsValues";
import * as React from "react";
import { Routes, useNavigate } from "react-router-dom";
import UserRegistrationSchema from "@schemas/userRegistrationSchema";
import ButtonDefault from "@UIComponents/buttons/ButtonDefault";
import ROUTES from "@constants/ROUTES";
import GENDER from "@enums/GENDER";
import { useRootStore } from "store";
import USER_TYPE from "@enums/USER_TYPE.enum";
import {parseCongnitoUser} from "helpers/parseCognitoUser";
import { getUserAttributes } from "@services/api";
import UserSettingsSchema from "@schemas/userSettingsSchema";

export interface IUserSettingsPageProps {}

export function UserSettingsPage(props: IUserSettingsPageProps) {
  const navigate = useNavigate();

  const {authStore} = useRootStore()

  const formikRef = React.useRef<any>();

  const [initialValues, setInitialValues] = React.useState<UserSettingsValues>({
    county: "",
    email: "",
    eircode: "",
    firstname: "",
    lastname: "",
    password: "",
    address: "",
    phone: "",
    gender: GENDER.Male,
  });
  console.log("init",initialValues)

  React.useEffect(() => {
    (async () => {
      const user = await getUserAttributes();
      console.log(user);
      const parsedUser = parseCongnitoUser(user);
      console.log(parsedUser)
      setInitialValues(parsedUser);
      // formikRef.current.();
    })();
  }, []);

  const onSubmit = async (
    values: UserSettingsValues,
    actions: FormikHelpers<UserSettingsValues>
  ) => {
    try {
      await authStore.updateUser({ ...values});
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
        validationSchema={UserSettingsSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ handleChange, values, errors }) => (
          <Form>
            <FormInput
              name="firstname"
              placeholder="First Name"
              onChange={handleChange}
              value={values.firstname}
              errors={errors.firstname}
            />
            <FormInput
              name="lastname"
              placeholder="Last Name"
              onChange={handleChange}
              value={values.lastname}
              errors={errors.lastname}
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
            <ButtonDefault type="submit">Submit</ButtonDefault>
            {Object.values(errors)}
          </Form>
        )}
      </Formik>
    </Card>
  );
}

export default UserSettingsPage;
