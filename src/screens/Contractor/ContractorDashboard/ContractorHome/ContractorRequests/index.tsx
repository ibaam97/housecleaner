import BOOKING_STATUS from "@enums/BOOKING_STATUS.enum";
import { getUserAttributes } from "@services/api";
import {
  acceptBooking,
  getServiceBookings,
  updateBooking,
} from "@services/api/bookings";
import { BookingRequestCard } from "@UIComponents/cards/BookingRequestCard";
import * as React from "react";
import { Booking } from "types/Booking";
import Id from "types/Id";

export interface IContractorRequestsProps {}

export function ContractorRequests(props: IContractorRequestsProps) {
  const [bookings, setBookings] = React.useState<Booking[]>([]);

  const getRequestedBookings = async () => {
    const res = await getServiceBookings({
      service_id: (await getUserAttributes())["custom:service_id"],
    });
    console.log("res", res);
    setBookings(
      res.filter(
        (booking) => booking.booking_status === BOOKING_STATUS.UNASSIGNED
      )
    );
  };

  React.useEffect(() => {
    (async () => {
      try {
        await getRequestedBookings();
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const onAccept = async (id: Id, booking: Booking) => {
    try {
      const res = await acceptBooking({ id });
      await getRequestedBookings()
      console.log("res", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="grid">
        {bookings.map((booking) => (
          <BookingRequestCard
            booking={booking}
            key={booking.id}
            onAccept={onAccept}
          />
        ))}
      </div>
    </div>
  );
}
