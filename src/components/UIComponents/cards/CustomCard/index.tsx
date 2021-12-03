import { Card } from "antd";
import * as React from "react";

export interface ICustomCardProps {
  children;
  color?: string;
  [prop: string]: any;
}

export function CustomCard({
  children,
  className,
  color="white",
  ...rest
}: ICustomCardProps) {
  return (
    <div
      className={`shadow-md rounded ${className}`}
      {...rest}
      style={color ? { backgroundColor: color } : {}}
    >
      {children}
    </div>
  );
}
