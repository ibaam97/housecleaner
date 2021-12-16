import * as React from "react";
import ButtonDefault from "../ButtonDefault";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";

type FieldType = "boolean" | "number" | "option" | "string";

type Field = {
  type: FieldType;
  componentProps?: any;
  initialValue?: any;
  required?: boolean;
  name: string;
  options?: { value: any; title: string };
};

export interface IFormCreatorProps {
  fields: Field[];
  onSubmit: (values) => any;
}

export default function FormCreator({ fields }: IFormCreatorProps) {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
    return onSubmit(formProps);
  };

  return (
    <form style={{ display: "grid", gap: "1rem" }} onSubmit={onSubmit}>
      {fields.map(
        ({ type, componentProps, initialValue, required, name, options }) => {
          if (type === "boolean") {
            return (
              <FormSelect
                name={name}
                defaultValue={true}
                options={[
                  { title: "True", value: true },
                  { title: "False", value: false },
                ]}
              />
            );
          }
          if (type === "option") {
            return (
              <FormSelect name={name} defaultValue={true} options={options} />
            );
          }
          if (type === "number" || type === "string") {
            return <FormInput name={name} defaultValue={initialValue} />;
          }
        }
      )}
      <ButtonDefault style={{ width: "fit-content" }}>Submit</ButtonDefault>
    </form>
  );
}
