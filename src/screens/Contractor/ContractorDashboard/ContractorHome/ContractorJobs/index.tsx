import { getUserAttributes } from "@services/api";
import {
  checkinBooking,
  checkoutBooking,
  getBookings,
  getContractorBookings,
  getServiceBookings,
  updateBooking,
} from "@services/api/bookings";
import { BookingJobsCard } from "@UIComponents/cards/BookingJobCard";
import { BookingRequestCard } from "@UIComponents/cards/BookingRequestCard";
import { BOOKING_STATUS } from "API";
import * as React from "react";
import { Booking } from "types/Booking";
import Id from "types/Id";

export interface IContractorJobsProps {}

export function ContractorJobs(props: IContractorJobsProps) {
  const [bookings, setBookings] = React.useState<Booking[]>([]);

  const getCurrentBookings = async () => {
    const res = await getContractorBookings({
      contractor_id: (await getUserAttributes()).email,
    });
    console.log("res", res);
    setBookings(res);
  };

  React.useEffect(() => {
    (async () => {
      try {
        await getCurrentBookings();
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const onClick = async (id: Id, booking: Booking) => {
    try {
      if (
        booking.booking_status === BOOKING_STATUS.ASSIGNED ||
        booking.booking_status === BOOKING_STATUS.ONGOING
      ) {
        const updateRes =
          booking.booking_status === BOOKING_STATUS.ASSIGNED
            ? await checkinBooking({ id })
            : await checkoutBooking({ id });
        console.log(updateRes);

        await getCurrentBookings();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="grid">
        {bookings.map((booking) => (
          <BookingJobsCard
            booking={booking}
            onClick={onClick}
            key={booking.id}
          />
        ))}
      </div>
    </div>
  );
}
