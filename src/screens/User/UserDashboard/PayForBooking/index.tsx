import Screen from "@UIComponents/layout/Screen";
import Section from "@UIComponents/layout/Section";
import useBookingFromStateOrPulled from "hooks/useBookingFromStateOrPulled";
import * as React from "react";
import { useLocation, useParams } from "react-router-dom";
import CheckoutForm from "./CheckOutForm";

export interface IPayForBookingProps {}

export function PayForBooking(props: IPayForBookingProps) {
  const { id } = useParams();

  const { booking } = useBookingFromStateOrPulled(id);

  console.log(booking, "booking");

  return (
    <Screen>
      <Section>
        <CheckoutForm booking={booking} />
      </Section>
    </Screen>
  );
}
