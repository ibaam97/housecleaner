import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { CheckBox } from "../CheckBox";

export interface ICheckButtonProps {
  text?: string;
  outline?: boolean;
  fontFamily?: "Poppins";
  className?: string;
  children?: any;
  onClick?: Function;
}

const StyledButton = styled.button<ICheckButtonProps>`
  ${tw`text-xs hover:shadow active:shadow-md bg-primary-100 rounded-md transform hover:scale-105 active:scale-100 text-gray-500 flex justify-between items-center`}
  padding: 0.7em 1.2em;
  transition: all 0.3s;
  ${({ outline }) => (outline ? tw`` : "")};
  /* background-size: 150%; */
  &:focus,
  &:active {
    outline: none;
  }
`;

export default function CheckButton({ children, className }: ICheckButtonProps) {
  return (
    <StyledButton className={className}>
      <div className="mr-1 w-fit">{children}</div> <CheckBox checked={false} />
    </StyledButton>
  );
}
