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
import { getContractorBookings } from "@services/api/bookings";

export interface IBookingRequestCardProps {
  booking: Booking;
  onAccept: (id, booking) => any;
  [prop: string]: any;
}

const StyledField = styled.div`
  ${tw``}
`;

export function BookingRequestCard({
  booking,
  onAccept,
  ...props
}: IBookingRequestCardProps) {
  const { service, address, date, user, id } = booking;
  return (
    <div>
      <div className="px-5 py-5 flex gap-12 items-center">
        <StyledField>
          <BaseText fontSize="1rem">Type</BaseText>
          <Paragraph>{service.name}</Paragraph>
        </StyledField>
        <StyledField>
          <BaseText fontSize="1rem">Customer</BaseText>
          <Paragraph>{user.firstname}</Paragraph>
        </StyledField>
        <StyledField>
          <BaseText fontSize="1rem">Address</BaseText>
          <Paragraph>{address}</Paragraph>
        </StyledField>
        <StyledField>
          <BaseText fontSize="1rem">Date</BaseText>
          <Paragraph className="w-max">{format(new Date(date), "dd-MM-yy")}</Paragraph>
        </StyledField>

        <div className="ml-auto flex gap-4">
          <ButtonDefault onClick={() => onAccept(id, booking)}>
            Accept
          </ButtonDefault>
        </div>
      </div>
      <Divider />
    </div>
  );
}
