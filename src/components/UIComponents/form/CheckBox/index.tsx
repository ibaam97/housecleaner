import * as React from "react";
import styled from "styled-components";

export interface ICheckBoxProps {
  checked: boolean;
}

const StyledCheckBox = styled.div<ICheckBoxProps>`
  height: 1.2rem;
  width: 1.2rem;
  border: 1.5px solid currentColor;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ checked }) => checked && `color: #0c67ef;`}

  .inside {
    /* content: ""; */
    display: block;
    height: 0.7rem;
    width: 0.7rem;
    border-radius: 1px;
    background-color: #0c67ef;
    opacity: 0;
    transition: opacity 0.2s;
    ${({ checked }) => checked && "opacity: 1;"}
  }
`;

export function CheckBox(props: ICheckBoxProps) {
  return (
    <StyledCheckBox {...props}>
      <div className="inside"></div>
    </StyledCheckBox>
  );
}
