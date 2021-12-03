import { Button } from "antd";
import * as React from "react";

export interface IDefaultButtonProps {
    children: any,
    [prop:string]: any
}

export function DefaultButton({children,...props}: IDefaultButtonProps) {
  return <Button {...props}>{children}</Button>;
}
