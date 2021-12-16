import * as React from "react";
import styled from "styled-components";
import FormInput, { IFormInputProps } from "../FormInput";
import MapIframe, { IMapIframeProps } from "../MapIframe";

const StyledContainer = styled.div`
  display: grid;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export interface IAddressMapHelperProps extends IMapIframeProps {
  name: string;
  value: string;
  mapRefreshRate?: number;
  onChange?: (e) => any;
}

export default function AddressMapHelper({
  name,
  value,
  mapRefreshRate = 2000,
  onChange,
  apiKey,
  height,
  zoom,
  ...props
}: IAddressMapHelperProps | IFormInputProps) {
  let typingTimer = React.useRef<NodeJS.Timeout>();

  const [innerValue, setInnerValue] = React.useState<string>(value);

  const [focused, setFocused] = React.useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const ref = React.useRef();

  const changeHandler = (e) => {
    const val = e.target.value;
    clearTimeout(typingTimer.current);
    if (val) {
      typingTimer.current = setTimeout(doneTyping, mapRefreshRate, val);
    }
  };

  //user is "finished typing," do something
  function doneTyping(val) {
    setInnerValue(val);
  }
  return (
    <StyledContainer>
      <FormInput
        ref={ref}
        name={name}
        value={value}
        onKeyUp={changeHandler}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      />
      {focused && (
        <MapIframe
          address={innerValue}
          apiKey={apiKey}
          height={height}
          zoom={zoom}
        />
      )}
    </StyledContainer>
  );
}
