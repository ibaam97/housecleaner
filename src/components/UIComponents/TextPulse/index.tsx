import Paragraph from "@UIComponents/Typography/Paragraph";
import { Badge } from "antd";
import * as React from "react";

export interface ITextPulseProps {
  [prop: string]: any;
}

export function TextPulse({ className, children, ...props }: ITextPulseProps) {
  return (
    <div className="flex gap-2 items-center">
      <Badge {...props} status="processing" />
      <Paragraph {...props}>{children}</Paragraph>
    </div>
  );
}

export default TextPulse
