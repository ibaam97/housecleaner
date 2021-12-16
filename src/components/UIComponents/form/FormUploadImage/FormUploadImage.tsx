import COLORS from "@styles/COLORS";
import { FormikErrors } from "formik";
import React, { useRef, useEffect, useState } from "react";
import { ReactComponent as UploadIcon } from "./uploadIcon.svg";
import styled from "styled-components";
import tw from "twin.macro";
// import "./FormInput.scss";

const StyledInput = styled.div<{ active?: boolean; image? }>`
  ${tw`text-xs`}
  font-size: .8rem;
  font-family: inherit;
  color: inherit;
  width: 100%;
  display: block;
  transition: all 0.3s;
  outline: none;
  background: transparent;
  height: 20rem;
  resize: none;
  position: relative;
  border-radius: 0.5rem;
  border: 0.1rem #777777 dashed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  cursor: pointer;

  ${({ image }) =>
    image
      ? `
    background-image: url(${image});
    .icon{
      display: none;
    }
  `
      : ""}

  &:valid {
    box-shadow: 0 1rem 2rem rgba(black, 0.1);
  }

  &::-webkit-input-placeholder {
    color: #777777;
  }

  &:placeholder-shown + &__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
`;

const StyledPlaceholder = styled.p`
  position: absolute;
  font-size: 0.6rem;
  color: #777777;
  transform: translateY(1.4rem);
  display: block;
  transition: all 0.3s;
`;

const StyledLabel = styled.label`
  font-size: 0.8rem;
  color: #777777;
  margin-bottom: 0.2rem;
  display: block;
  transition: all 0.3s;
`;

const StyledContainer = styled.div`
  ${tw`rounded-lg shadow-sm`}
  background-color: ${COLORS.primary[300]};
  display: flex;
  align-items: center;
  padding: 1rem 1.2rem;
  &:not(:last-child) {
    margin-bottom: 0.3rem;
  }
  textarea:placeholder-shown + ${StyledPlaceholder} {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-1rem);
  }
  &:hover .icon {
    transform: translateY(-2rem);
  }

  .icon {
    transition: all 0.4s ease-in-out;
  }
`;

const StyledIcon = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 1000rem;
  background-color: gray;
  margin-right: 1rem;
`;

export interface IFormUploadImageProps {
  placeholder?: string;
  name: string;
  required?: boolean;
  inputRef?;
  invalid?;
  icon?;
  value;
  onChange?: (file) => any;
  options?: any[];
  label?: string;
  errors?: string[] | string | FormikErrors<any> | FormikErrors<any>[];
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
  style,
  className,
  label,
  ...rest
}: IFormUploadImageProps) {
  const [inputValue, setInputValue] = useState(value);

  const [image, setImage] = useState(value);

  useEffect(() => {
    setImage(value);
  }, [value]);

  console.log(image, "image");
  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      const originalEvent = e;
      onChange(file);
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`mb-4 ${className}`}>
      <StyledContainer {...{ className, style }} {...rest}>
        {/* <StyledIcon /> */}
        <div style={{ flex: 1, position: "relative" }}>
          <StyledInput {...rest} id={name} active image={image}>
            <UploadIcon width="5rem" className="icon" />
          </StyledInput>
          <input
            type="file"
            name={name}
            placeholder={placeholder}
            required={required}
            value={inputValue}
            onChange={changeHandler}
            {...rest}
            id={name}
            list={`${name}-options`}
            accept="image/*"
            style={{
              zIndex: 100,
              opacity: 0,
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
            }}
          />
        </div>
      </StyledContainer>
    </div>
  );
}
