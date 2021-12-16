import BOOKING_STATUS from "@enums/BOOKING_STATUS.enum";
import { BookingCard } from "@UIComponents/cards/BookingCard";
import Screen from "@UIComponents/layout/Screen";
import Section from "@UIComponents/layout/Section";
import { observer } from "mobx-react";
import * as React from "react";
import { useRootStore } from "store";

export interface IContractorBookingsHistoryProps {}

export function ContractorBookingsHistory(props: IContractorBookingsHistoryProps) {
  const {
    bookingsStore: { getContractorBookings, bookings },
  } = useRootStore();

  React.useEffect(() => {
    (async () => {
      try {
        const res = await getContractorBookings({});
        console.log(res, "bookings")
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="grid gap-10">
      {bookings
        .filter((booking) => booking.booking_status === BOOKING_STATUS.PAID)
        .map((booking) => (
          <BookingCard key={booking.id} booking={booking} isContractor onDelete={()=>{}}/>
        ))}
    </div>
  );
}

export default observer(ContractorBookingsHistory);
