import { BaseText } from "@UIComponents/Typography/BaseText";
import Paragraph from "@UIComponents/Typography/Paragraph";
import * as React from "react";
import { Booking } from "types/Booking";
import { CustomCard } from "../CustomCard";
import { format } from "date-fns";
import styled from "styled-components"
import tw from "twin.macro";
import COLORS from "@styles/COLORS";

export interface IBookingCardProps {
  //   booking: Booking;
  [prop: string]: any;
}

const StyledField = styled.div`
    ${tw`bg-white p-4`}
`
export function BookingCard({
  //   booking: { service },
  ...props
}: IBookingCardProps) {
  return (
    <CustomCard className="p-5 flex gap-12">
      <StyledField>
        <BaseText fontSize="1rem">Type</BaseText>
        <Paragraph>{"House Keeeper"}</Paragraph>
      </StyledField>
      <StyledField>
        <BaseText fontSize="1rem">Contractor</BaseText>
        <Paragraph>{"Allen Poe"}</Paragraph>
      </StyledField>
      <StyledField>
        <BaseText fontSize="1rem">Date</BaseText>
        <Paragraph>{format(Date.now(), "dd-mm-yy")}</Paragraph>
      </StyledField>
      <StyledField className="ml-auto">
        <BaseText fontSize="1rem">Status</BaseText>
        <Paragraph>Assigned</Paragraph>
      </StyledField>
    </CustomCard>
  );
}
