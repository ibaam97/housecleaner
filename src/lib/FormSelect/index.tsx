import React, { useRef, useEffect, useState, forwardRef } from "react";
import styled from "styled-components";
// import "./FormSelect.scss";

const StyledInput = styled.select`
  font-size: .8rem;
  font-family: inherit;
  color: inherit;
  width: 100%;
  display: block;
  transition: all 0.3s;
  outline: none;
  background: transparent;
  height: 100%;

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
  background-color: #1D416B;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    /* margin-bottom: 0.3rem; */
  }
  input:placeholder-shown + ${StyledPlaceholder} {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-1rem);
  }
  /* border: 1.5px solid #e7e7e7; */
  /* width: 100%; */
  padding: 1rem 1.2rem;
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
  onChange?: (e) => any;
  options: { title: string; value: any }[];
  label?: string;
  [prop: string]: any;
}

const FormSelect = forwardRef<HTMLSelectElement, IFormSelectProps>(
  (
    {
      placeholder,
      type,
      name,
      required = true,
      invalid = false,
      value = null,
      onChange = (e) => {},
      icon,
      style,
      className,
      options,
      label,
      ...rest
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(value);

    const changeHandler = (e) => {
      setInputValue(e.target.value);
      onChange(e);
    };

    useEffect(() => {
      setInputValue(value);
    }, [value]);

    return (
      <div>
        <StyledLabel htmlFor={name}>{label}</StyledLabel>
        <StyledContainer {...{ style }} {...rest}>
          {icon && <StyledIcon />}
          <div style={{ flex: 1 }}>
            <StyledInput
              ref={ref}
              name={name}
              placeholder={placeholder}
              required={required}
              value={inputValue}
              onChange={changeHandler}
              {...rest}
              id={name}
            >
              {options.map(({ title, value }) => {
                return <option value={value}>{title}</option>;
              })}
            </StyledInput>
          </div>
        </StyledContainer>
      </div>
    );
  }
);

export default FormSelect;
