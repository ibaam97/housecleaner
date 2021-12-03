import COLORS from "@styles/COLORS";
import { Select } from "antd";
import { Option } from "antd/lib/mentions";
import { FormikErrors } from "formik";
import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
// import "./FormInput.scss";

const StyledSelect = styled(Select)`
  ${tw`text-xs`}
  font-size: .8rem;
  font-family: inherit;
  color: inherit;
  /* padding: 0.2rem 0; */
  /* border-bottom: .5px solid purple; */
  width: 100%;
  display: block;
  transition: all 0.3s;
  outline: none;
  /* border-bottom: 1.5px solid purple; */
  background: transparent;
  height: 100%;

  .ant-select-selector {
    padding: 0 !important;
  }

  &:valid {
    box-shadow: 0 1rem 2rem rgba(black, 0.1);
  }

  &::-webkit-input-placeholder {
    color: #777777;
    /* font-size: 1rem; */
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
  /* font-weight: 700; */
  /* margin-left: 2rem; */
  /* margin-top: 0.2rem; */
  display: block;
  transition: all 0.3s;
`;

const StyledLabel = styled.label`
  font-size: 0.8rem;
  color: #777777;
  margin-bottom: 0.2rem;
  /* font-weight: 700; */
  /* margin-left: 2rem; */
  /* margin-top: 0.2rem; */
  display: block;
  transition: all 0.3s;
`;

const StyledContainer = styled.div`
  ${tw`rounded-lg shadow-sm`}
  background-color: ${COLORS.primary[300]};
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 0.3rem;
  }
  input:placeholder-shown + ${StyledPlaceholder} {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-1rem);
  }
  /* border: 1.5px solid #e7e7e7; */
  /* width: 100%; */
  padding: 0.5rem 1.2rem;
`;

const StyledIcon = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 1000rem;
  background-color: gray;
  margin-right: 1rem;
`;

export interface IFormSelectProps {
  placeholder?: string;
  type?: string;
  name: string;
  required?: boolean;
  inputRef?;
  invalid?;
  icon?;
  value;
  onChange?: (el) => any;
  options: { value: any; title: string | number }[];
  label?: string;
  errors?: string[] | string | FormikErrors<any> | FormikErrors<any>[];
  [prop: string]: any;
}

export default function FormSelect({
  placeholder,
  type,
  name,
  required = true,
  inputRef,
  invalid = false,
  value = null,
  onChange = () => {},
  options,
  errors,
  icon,
  style,
  className,
  label,
  ...rest
}: IFormSelectProps) {
  const ref = useRef();

  const [inputValue, setInputValue] = useState(value);

  if (!inputRef) inputRef = ref;

  let invalidIsFunction = false;

  if (typeof invalid === "function") invalidIsFunction = true;

  useEffect(() => {
    // if (invalidIsFunction ? invalid(inputValue) : invalid)
    //   inputRef.current.setCustomValidity(
    //     invalidIsFunction ? invalid(inputValue).error : invalid.error
    //   );
    // else inputRef.current.setCustomValidity("");
  }, [invalid, inputValue]);

  const changeHandler = (value) => {
    setInputValue(value);
    onChange({ target: { name, value } });
  };

  //   useEffect(() => {
  //     setInputValue(value);
  //   }, [value]);

  return (
    <div className={`mb-7 ${className}`}>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledContainer {...{ style }} {...rest}>
        {icon && <StyledIcon />}
        <div style={{ flex: 1 }}>
          <StyledSelect
            ref={inputRef}
            name={name}
            placeholder={placeholder}
            required={required}
            value={inputValue}
            onChange={changeHandler}
            {...rest}
            id={name}
            list={`${name}-options`}
            bordered={false}
          >
            {options.map(({ value, title }) => {
              return <Option value={value}>{title}</Option>;
            })}
          </StyledSelect>
          {/* <div className="flex gap-5 flex-wrap"> */}
          <StyledPlaceholder>{placeholder}</StyledPlaceholder>
          {/* {value && errors} */}
          {/* </div> */}
        </div>
      </StyledContainer>
    </div>
  );
}
