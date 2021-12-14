import { BookingCard } from "@UIComponents/cards/BookingCard";
import Screen from "@UIComponents/layout/Screen";
import Section from "@UIComponents/layout/Section";
import { observer } from "mobx-react";
import * as React from "react";
import { useRootStore } from "store";
import { Booking } from "types/Booking";

export interface IUserBookingsProps {}

export function UserBookings(props: IUserBookingsProps) {

  const [userBookings, setUserBookings] = React.useState<Booking[]>([])
  const {
    bookingsStore: { getUserBookings, bookings },
  } = useRootStore();

  React.useEffect(() => {
    (async () => {
      try {
        const res = await getUserBookings({});
        setUserBookings(res)
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Screen>
      <Section>
        <div className="grid gap-10">
          {bookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </div>
      </Section>
    </Screen>
  );
}

export default observer(UserBookings);
