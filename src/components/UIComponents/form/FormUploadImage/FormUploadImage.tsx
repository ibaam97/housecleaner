import React, { useState, useEffect } from "react";
import "./FormUploadImage.scss";
import ButtonDefault from "@UIComponents/buttons/ButtonDefault";

export interface IFormUploadImageProps {
  placeholder: string;
  type: string;
  name: string;
  required: boolean;
  inputRef;
  invalid;
  value;
  onChange: (el) => any;
  options: any[];
  label: string;
  [prop: string]: any;
}

export default function FormUploadImage({
  placeholder,
  type,
  name,
  required = true,
  inputRef,
  invalid = false,
  value = null,
  onChange = () => {},
  options = null,
  ...rest
}: IFormUploadImageProps) {
  const [image, setImage] = useState(value);

  useEffect(() => {
    setImage(value);
  }, [value]);

  const changeHandler = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      const reader = new FileReader();
      const originalEvent = e;
      reader.onload = (e) => {
        setImage(e.target.result);
        onChange({
          ...originalEvent,
          target: {
            ...originalEvent.target,
            name: name,
            value: e.target.result,
          },
        });
      };
      reader.readAsDataURL(imageFile);
    }
  };


  return (
    <div className="formUploadImage card hoverEffect borderRadius-medium">
      <input
        type="file"
        required={required}
        className="formUploadImage__input"
        id={name}
        name={name}
        onChange={changeHandler}
        accept="image/*"
        {...rest}
      />
      <label
        htmlFor={name}
        className="formUploadImage__label"
        style={{ backgroundImage: image ? `url(${image})` : "none" }}
      >
        {value ? null : "+"}
      </label>
    </div>
  );
}
