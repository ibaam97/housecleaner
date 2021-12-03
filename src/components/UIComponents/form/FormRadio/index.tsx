import { primary } from "@styles/COLORS";
import React from "react";
import styled from "styled-components";
import { CheckBox } from "../CheckBox";

interface IFormRadioProps {
  value: any;
  name?: string;
  placeholder?: string;
  className?: string;
  onClick?: (value: any) => any;
  [prop: string]: any;
}

const StyledFormRadio = styled.div`
  padding: 0.5rem 0;
  height: 2rem;
  color: ${primary[800]};

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  .formRadio__input {
    display: none;
  }

  .formRadio__label {
    font-size: 0.9rem;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .formRadio__input:checked ~ .formRadio__label .formRadio__button {
    color: #0c67ef;
    &__inside {
      opacity: 1;
    }
  }
`;

export default function FormRadio({
  value,
  name,
  placeholder,
  className,
  onClick = () => {},
  ...rest
}: IFormRadioProps) {
  const clickHandler = (e) => {
    let value = e.target.value;
    if (value === "false") value = false;
    if (value === "true") value = true;
    onClick({ target: { name: e.target.name, value } });
  };

  return (
    <StyledFormRadio className={className}>
      <input
        type="radio"
        className="formRadio__input"
        value={value}
        id={`radio${value}`}
        name={name}
        onClick={clickHandler}
        {...rest}
      />
      <label htmlFor={`radio${value}`} className="formRadio__label">
        <CheckBox checked={false} />
        {placeholder}
      </label>
    </StyledFormRadio>
  );
}
