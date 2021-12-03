import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Section = styled.div`
  ${tw`md:py-24 py-16 lg:px-24 md:px-1/12 sm:px-24 overflow-hidden px-10`}
  ${({ snap }) => snap && `scroll-snap-align: start;`}
`;

export default Section;
