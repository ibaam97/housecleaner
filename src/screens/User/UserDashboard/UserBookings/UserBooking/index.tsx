import Screen from "@UIComponents/layout/Screen";
import Section from "@UIComponents/layout/Section";
import { Badge, Descriptions } from "antd";
import * as React from "react";
import { Booking } from "types/Booking";

export interface IAppProps {}

export function App(props: IAppProps) {
  const booking: Booking = undefined;

  return (
    <Screen>
      <Section>
        <Descriptions title="User Info" bordered>
          <Descriptions.Item label="Service" span={2}>
            {booking.service.name}
          </Descriptions.Item>
          <Descriptions.Item label="County" span={2}>
            {booking.county}
          </Descriptions.Item>
          <Descriptions.Item label="Booking Date" span={2}>
            2018-04-24 18:00:00
          </Descriptions.Item>
          <Descriptions.Item label="Contractor" span={2}>
            {booking.contractor.firstname}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Badge status="processing" text={booking.booking_status} />
          </Descriptions.Item>
          <Descriptions.Item label="Address">
            {booking.address}
          </Descriptions.Item>
        </Descriptions>
      </Section>
    </Screen>
  );
}
