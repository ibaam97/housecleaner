import { BaseText } from "@UIComponents/Typography/BaseText";
import Paragraph from "@UIComponents/Typography/Paragraph";
import * as React from "react";
import { Booking } from "types/Booking";
import { CustomCard } from "../CustomCard";
import { format } from "date-fns";
import styled from "styled-components";
import tw from "twin.macro";
import COLORS from "@styles/COLORS";
import Screen from "@UIComponents/layout/Screen";
import Section from "@UIComponents/layout/Section";
import { Badge, Descriptions } from "antd";
import ButtonDefault from "@UIComponents/buttons/ButtonDefault";

export interface IBookingCardProps {
  booking: Booking;
  [prop: string]: any;
}

const StyledField = styled.div`
  ${tw`bg-white p-4`}
`;
export function BookingCard({
  booking: { service, contractor, booking_status, address, county, date },
  ...props
}: IBookingCardProps) {
  return (
    <div>
      <Descriptions bordered className="bg-gray-200">
        <Descriptions.Item label="Service" span={2}>
          {service.name}
        </Descriptions.Item>
        <Descriptions.Item label="County" span={2}>
          {county}
        </Descriptions.Item>
        <Descriptions.Item label="Booking Date" span={2}>
          {format(new Date(date), "dd-mm-yy")}
        </Descriptions.Item>
        <Descriptions.Item label="Contractor" span={2}>
          {contractor?.firstname || "Requested"}
        </Descriptions.Item>
        <Descriptions.Item label="Address" span={2}>
          {address}
        </Descriptions.Item>
        <Descriptions.Item label="Status" span={2}>
          <Badge status="processing" text={booking_status} />
        </Descriptions.Item>
      </Descriptions>
      <ButtonDefault className="mt-3">Cancel</ButtonDefault>
    </div>
  );
}
