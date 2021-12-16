import COLORS from "@styles/COLORS";
import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
// import "./FormInput.scss";

const StyledInput = styled.textarea`
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
  resize: none;

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
  textarea:placeholder-shown + ${StyledPlaceholder} {
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

export interface IFormTextAreaProps {
  placeholder?: string;
  type?: string;
  name: string;
  required?: boolean;
  inputRef?;
  invalid?;
  value?;
  onChange?: (el) => any;
  options?: any[];
  label?: string;
  [prop: string]: any;
}

export default function FormTextArea({
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
}: IFormTextAreaProps) {
  const ref = useRef();

  const [inputValue, setInputValue] = useState(value);

  if (!inputRef) inputRef = ref;

  let invalidIsFunction = false;

  if (typeof invalid === "function") invalidIsFunction = true;

  useEffect(() => {
    if (invalidIsFunction ? invalid(inputValue) : invalid)
      inputRef.current.setCustomValidity(
        invalidIsFunction ? invalid(inputValue).error : invalid.error
      );
    else inputRef.current.setCustomValidity("");
  }, [invalid, inputValue]);

  const resize = () => {
    inputRef.current.style.height = "";
    inputRef.current.style.height = inputRef.current.scrollHeight + "px";
  };

  const changeHandler = (e) => {
    resize();
    setInputValue(e.target.value);
    onChange(e);
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <div className={`mb-4 ${className}`}>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledContainer {...{ className, style }} {...rest}>
        <StyledIcon />
        <div style={{ flex: 1 }}>
          <StyledInput
            ref={inputRef}
            name={name}
            placeholder={placeholder}
            required={required}
            value={inputValue}
            onChange={changeHandler}
            {...rest}
            id={name}
          />
          <StyledPlaceholder>{placeholder}</StyledPlaceholder>
          {options ? (
            <datalist id={`${name}-options`}>
              {options.map((element) => {
                return <option value={element} />;
              })}
            </datalist>
          ) : null}
        </div>
      </StyledContainer>
    </div>
  );
}
