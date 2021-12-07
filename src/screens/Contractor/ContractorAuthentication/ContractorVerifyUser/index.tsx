import ROUTES from "@constants/ROUTES";
import UserSignInSchema from "@schemas/userSignInSchema";
import ButtonDefault from "@UIComponents/buttons/ButtonDefault";
import FormInput from "@UIComponents/form/FormInput/FormInput";
import Screen from "@UIComponents/layout/Screen";
import Section from "@UIComponents/layout/Section";
import { Card } from "antd";
import Form from "antd/lib/form/Form";
import { Auth } from "aws-amplify";
import { Formik } from "formik";
import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRootStore } from "store";

import * as Yup from "yup";

const VerificationSchema = Yup.object().shape({
  verificationToken: Yup.string().min(4).required("Required"),
});

export interface IContractorVerifyUserProps {}

export function ContractorVerifyUser(props: IContractorVerifyUserProps) {
  const navigate = useNavigate();

  const email = useParams()["email"];

  const { authStore } = useRootStore();

  const initialValues = {
    verificationToken: "",
  };

  const onSubmit = async (values, actions) => {
    try {
      await Auth.confirmSignUp(email, values);
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
            validationSchema={VerificationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
          >
            {({ handleChange, values, errors }) => (
              <Form>
                <FormInput
                  name="verificationToken"
                  placeholder="verificationToken"
                  onChange={handleChange}
                  value={values.verificationToken}
                  errors={errors.verificationToken}
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
