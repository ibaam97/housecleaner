import FormInput from "@UIComponents/form/FormInput/FormInput";
import Screen from "@UIComponents/layout/Screen";
import Section from "@UIComponents/layout/Section";
import { Card } from "antd";
import { Form, Formik, FormikHelpers } from "formik";
import { ContractorRegistrationValues } from "./ContractorRegistrationValues";
import * as React from "react";
import { Routes, useNavigate } from "react-router-dom";
import ContractorRegistrationSchema from "@schemas/userRegistrationSchema";
import ButtonDefault from "@UIComponents/buttons/ButtonDefault";
import FormSelect from "@UIComponents/form/FormSelect";
import services from "@testdata/services";
import ROUTES from "@constants/ROUTES";

export interface IContractorRegistrationProps {}

export function ContractorRegistration(props: IContractorRegistrationProps) {
  const navigate = useNavigate();

  const initialValues: ContractorRegistrationValues = {
    county: "",
    email: "",
    eircode: "",
    firstname: "",
    lastname: "",
    service_id: services[0].id,
    address: "",
  };

  const onSubmit = async (
    values: ContractorRegistrationValues,
    actions: FormikHelpers<ContractorRegistrationValues>
  ) => {
    try {
      navigate(ROUTES.ContractorVerifyUser);
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
            validationSchema={ContractorRegistrationSchema}
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
                <FormSelect
                  name="name"
                  options={services.map(({ name, id }) => ({
                    value: id,
                    title: name,
                  }))}
                  value={values.service_id}
                  onChange={handleChange}
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

export default ContractorRegistration;
