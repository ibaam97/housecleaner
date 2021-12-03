import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BaseText } from "../BaseText";

const StyledParagraph = styled(BaseText)`
  ${tw`text-text2`}
  &:not(:last-child) {
    ${tw`mb-4`}
  }
`;

const Paragraph = ({ ...props }) => <StyledParagraph fontSize="1.125rem" {...props} />;

export default Paragraph;
