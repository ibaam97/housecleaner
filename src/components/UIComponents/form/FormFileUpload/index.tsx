import COLORS from "@styles/COLORS";
import { BaseText } from "@UIComponents/Typography/BaseText";
import * as React from "react";
import styled from "styled-components";
import { ReactComponent as UploadImageSvg } from "./images/upload-image.svg";

export interface IFormFileUploadProps {
  required: boolean;
  changeHandler: (el: any) => any;
  name: string;
  [prop: string]: any;
}

const StyledFormFileUpload = styled.div`
  border-radius: 0.5rem;
  background-color: ${COLORS.primary[300]};
  position: relative;
  padding: 1rem;
  width: 100%;
  border: 2px #b1aec3 dashed;

  .formFileUpload__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    outline: none;
    border: none;
  }

  .formFileUpload__empty {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
  }
`;

export function FormFileUpload({
  required,
  changeHandler,
  name,
  className,
  ...rest
}: IFormFileUploadProps) {
  return (
    <StyledFormFileUpload className={className}>
      <input
        type="file"
        required={required}
        className="formFileUpload__input"
        id={name}
        name={name}
        onChange={changeHandler}
        accept="image/*"
        {...rest}
      />
      <div className="formFileUpload__empty">
        <UploadImageSvg style={{ marginBottom: "1rem" }} />
        <BaseText style={{ maxWidth: "20rem", textAlign: "center" }}>
          Drop some of your Pre-wedding picture (Give dem!)
        </BaseText>
      </div>
    </StyledFormFileUpload>
  );
}
