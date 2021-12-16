import FormInput from "@UIComponents/form/FormInput/FormInput";
import Screen from "@UIComponents/layout/Screen";
import Section from "@UIComponents/layout/Section";
import { Card } from "antd";
import { Form, Formik, FormikHelpers } from "formik";
import { ContractorSettingsValues } from "./ContractorSettingsValues";
import * as React from "react";
import { Routes, useNavigate } from "react-router-dom";
import UserRegistrationSchema from "@schemas/userRegistrationSchema";
import ButtonDefault from "@UIComponents/buttons/ButtonDefault";
import ROUTES from "@constants/ROUTES";
import GENDER from "@enums/GENDER";
import { useRootStore } from "store";
import USER_TYPE from "@enums/USER_TYPE.enum";
import { parseCongnitoUser } from "helpers/parseCognitoUser";
import { getUserAttributes } from "@services/api";
import ContractorSettingsSchema from "@schemas/userSettingsSchema";
import ImageUpload from "@UIComponents/form/ImageUpload";
import H4 from "@UIComponents/Typography/H4";
import H5 from "@UIComponents/Typography/H5";
import FormUploadImage from "@UIComponents/form/FormUploadImage/FormUploadImage";
import { Storage } from "aws-amplify";

export interface IContractorSettingsPageProps {}

export function ContractorSettingsPage(props: IContractorSettingsPageProps) {
  const navigate = useNavigate();

  const { authStore } = useRootStore();

  const formikRef = React.useRef<any>();

  const [imageUrl, setImageUrl] = React.useState<File>();

  const [initialValues, setInitialValues] =
    React.useState<ContractorSettingsValues>({
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

  React.useEffect(() => {
    (async () => {
      const user = await getUserAttributes();
      console.log(user);
      const parsedUser = parseCongnitoUser(user);
      console.log(parsedUser);
      setInitialValues(parsedUser);
      // formikRef.current.();
    })();
  }, []);

  const onSubmit = async (
    values: ContractorSettingsValues,
    actions: FormikHelpers<ContractorSettingsValues>
  ) => {
    try {
      await authStore.updateUser({ ...values });
      navigate(ROUTES.ContractorDashboard);
    } catch (error) {
      // actions.setSubmitting(false);
    }
  };

  const onSubmitImage = async () => {
    try {
      const res = await Storage.put(
        `${authStore.user.id}.${imageUrl.type.split("/")[1]}`,
        imageUrl
      );
      console.log(res);
      await authStore.updateUser({ email: authStore.user.email, image: res.key });
      navigate(ROUTES.ContractorDashboard);
    } catch (error) {
      // actions.setSubmitting(false);
      console.log(error, { ...error });
    }
  };

  return (
    <Card>
      <Formik
        validationSchema={ContractorSettingsSchema}
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
      <div className="mt-10">
        <H5 className="mb-5">Upload Image</H5>
        <FormUploadImage name="wdwef" value={imageUrl} onChange={setImageUrl} />
        <ButtonDefault onClick={onSubmitImage}>Submit</ButtonDefault>
      </div>
    </Card>
  );
}

export default ContractorSettingsPage;
