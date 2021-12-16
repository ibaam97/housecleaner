import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

const ButtonDefault = styled.button<{ outline?; [props: string]: any }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  padding: 0.5em 2em;
  border: ${({ outline }) => (outline ? "1px solid currentColor" : "none")};
  transition: all 0.3s;
  ${tw`2xl:text-base text-sm`}
  ${tw`rounded transform hover:scale-105 active:scale-100`};
  color: ${({ color, outline }) => (outline ? color || "#3200C8" : "white")};
  background: ${({ outline, color }) =>
    outline ? `none` : color ? color : "#3200C8"};
  /* background: ${({ color }) => (color ? color : "#3200C8")}; */
  ${({ disabled }) => disabled && `filter: grayscale(90%);`}
  background-size: 150%;
  &:focus,
  &:active {
    outline: none;
  }
`;

export default ButtonDefault;
