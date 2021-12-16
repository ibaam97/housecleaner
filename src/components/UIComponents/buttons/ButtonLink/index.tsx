import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as ArrowLine } from "./images/arrow-line.svg";

const Button = styled(Link)`
  padding: 0.5em 0em;
  border: none;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  width: fit-content;
  transform-origin: left center;
  ${tw`text-secondary-900 cursor-pointer transform hover:scale-105 transition-all duration-300`}
`;

const StyledArrowLine = styled(ArrowLine)`
  ${tw`ml-2`}

  path {
    ${tw`fill-current`}
  }
`;

export default function ButtonLink({ children, to, ...props }) {
  return (
    <Button to={to} {...props}>
      {children} <StyledArrowLine />
    </Button>
  );
}
