import COLORS from "@styles/COLORS";
import * as React from "react";
import styled from "styled-components";
import tw from "twin.macro";

export interface IBaseTextProps {
  text?: string;
  fontSize?: string;
  fontFamily?: "Poppins";
  className?: string;
  children?: any;
  secondary?: boolean;
  fontWeight?: string;
  style?: any;
  [prop: string]: any;
}

const StyledBaseText = styled.p<IBaseTextProps>`
  /* color: ${COLORS.primary[900]}; */
  color: ${({ color }) => color || COLORS.text};
  ${({ fontSize }) => (fontSize ? `font-size: ${fontSize};` : "")}
  ${({ secondary }) => `font-family: ${secondary ? "Lora" : "Poppins"};`}
  ${({ fontWeight }) => (fontWeight ? `font-weight: ${fontWeight};` : "")}
`;

export function BaseText({
  text,
  children,
  fontSize,
  fontFamily = "Poppins",
  fontWeight = "400",
  secondary,
  ...rest
}: IBaseTextProps) {
  return (
    <StyledBaseText {...{ fontFamily, fontSize, fontWeight, secondary }} {...rest}>
      {text || children}
    </StyledBaseText>
  );
}
