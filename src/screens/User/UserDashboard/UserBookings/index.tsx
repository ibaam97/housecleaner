import { BookingCard } from "@UIComponents/cards/BookingCard";
import Screen from "@UIComponents/layout/Screen";
import Section from "@UIComponents/layout/Section";
import * as React from "react";

export interface IUserBookingsProps {}

export function UserBookings(props: IUserBookingsProps) {
  return (
    <Screen>
      <Section>
        <div className="grid gap-5">
          <BookingCard />
          <BookingCard />
          <BookingCard />
        </div>
      </Section>
    </Screen>
  );
}

export default UserBookings
