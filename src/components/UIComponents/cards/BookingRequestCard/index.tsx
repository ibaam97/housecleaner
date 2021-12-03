import { BaseText } from "@UIComponents/Typography/BaseText";
import Paragraph from "@UIComponents/Typography/Paragraph";
import * as React from "react";
import { Booking } from "types/Booking";
import { CustomCard } from "../CustomCard";
import { format } from "date-fns";
import styled from "styled-components";
import tw from "twin.macro";
import COLORS from "@styles/COLORS";
import ButtonDefault from "@UIComponents/buttons/ButtonDefault";
import { Divider } from "antd";

export interface IBookingRequestCardProps {
  //   booking: Booking;
  [prop: string]: any;
}

const StyledField = styled.div`
  ${tw``}
`;
export function BookingRequestCard({
  //   booking: { service },
  ...props
}: IBookingRequestCardProps) {
  return (
    <div>
      <div className="px-5 py-5 flex gap-12 items-center">
        <StyledField>
          <BaseText fontSize="1rem">Type</BaseText>
          <Paragraph>{"House Keeeper"}</Paragraph>
        </StyledField>
        <StyledField>
          <BaseText fontSize="1rem">Customer</BaseText>
          <Paragraph>{"Allen Poe"}</Paragraph>
        </StyledField>
        <StyledField>
          <BaseText fontSize="1rem">Address</BaseText>
          <Paragraph>Lorem ipsum dolor sit amet.</Paragraph>
        </StyledField>
        <StyledField>
          <BaseText fontSize="1rem">Date</BaseText>
          <Paragraph>{format(Date.now(), "dd-mm-yy")}</Paragraph>
        </StyledField>

        <div className="ml-auto flex gap-4">
          <ButtonDefault>Accept</ButtonDefault>
          <ButtonDefault>Reject</ButtonDefault>
        </div>
      </div>
      <Divider />
    </div>
  );
}
