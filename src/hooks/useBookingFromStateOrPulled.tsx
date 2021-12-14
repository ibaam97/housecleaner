import { getBooking } from "@services/api/bookings";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Booking } from "types/Booking";

export default function useBookingFromStateOrPulled(id) {
  const bookingFromState = useLocation()?.state?.booking;
  const [booking, setBooking] = useState<Booking>(bookingFromState);

  useEffect(() => {
    (async () => {
      if (!bookingFromState) {
        const fetchedBooking = await getBooking({ booking_id: id });
        console.log(fetchedBooking);
        setBooking(fetchedBooking);
      }
    })();
  }, []);

  return {booking, setBooking};
}
