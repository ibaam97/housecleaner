import * as React from "react";
import styled from "styled-components";

export interface ICustomizedSvgProps {
  svg: any;
  width?: string;
  height?: string;
  color?: string;
  className?: string;
  viewBox: string;
}

export function CustomizedSvg({ svg, width, height, color, ...rest }: ICustomizedSvgProps) {
  const StyledSvg = styled(svg)`
    overflow: visible;
    ${({ height, width }) => `height: ${height}; width: ${width};`} path {
      ${({ color }) => `fill: ${color}; stroke: ${color};`}
    }
  `;

  return <StyledSvg {...rest} {...{ width, height, color }} />;
}
