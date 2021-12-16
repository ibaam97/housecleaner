import React from "react";
import styled from "styled-components";

export interface IMapIframeProps {
  apiKey: string;
  address?: string;
  zoom?: number;
  height?: string | number;
}

const StyledContainer = styled.div<{ height: string | number }>`
  width: 100%;
  height: ${({ height }) => height};
  border-radius: .5rem;
  overflow: hidden;
`;

const MapIframe = ({
  apiKey,
  address,
  zoom = 18,
  height = "300px",
}: IMapIframeProps) => {
  return (
    <StyledContainer height={height}>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/search?key=${apiKey}&q=${address||"a"}&zoom=${zoom}`}
        allowFullScreen
      ></iframe>
    </StyledContainer>
  );
};

export default MapIframe;
