import BOOKING_STATUS from "@enums/BOOKING_STATUS.enum";
import { deleteBooking } from "@services/api/bookings";
import { BookingCard } from "@UIComponents/cards/BookingCard";
import Screen from "@UIComponents/layout/Screen";
import Section from "@UIComponents/layout/Section";
import { observer } from "mobx-react";
import * as React from "react";
import { useRootStore } from "store";
import { Booking } from "types/Booking";

export interface IUserBookingsProps {}

export function UserBookings(props: IUserBookingsProps) {
  const [userBookings, setUserBookings] = React.useState<Booking[]>([]);
  const {
    bookingsStore: { getUserBookings, bookings },
  } = useRootStore();

  React.useEffect(() => {
    (async () => {
      try {
        const res = await getUserBookings({});
        setUserBookings(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const onDeleteHandler = async (id) => {
    console.log(id);
    const res = await deleteBooking({ booking_id: id });
    console.log(res);
    const res2 = await getUserBookings({});
    setUserBookings(res);
  };

  return (
    <Screen>
      <Section>
        <div className="grid gap-10">
          {bookings
            .filter(
              ({ booking_status }) => booking_status !== BOOKING_STATUS.PAID
            )
            .map((booking) => (
              <BookingCard
                key={booking.id}
                booking={booking}
                onDelete={onDeleteHandler}
              />
            ))}
        </div>
      </Section>
    </Screen>
  );
}

export default observer(UserBookings);
