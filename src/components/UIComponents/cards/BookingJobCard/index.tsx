import { BaseText } from "@UIComponents/Typography/BaseText";
import Paragraph from "@UIComponents/Typography/Paragraph";
import * as React from "react";
import { Booking } from "types/Booking";
import { CustomCard } from "../CustomCard";
import { format } from "date-fns";
import styled from "styled-components";
import tw from "twin.macro";
import COLORS from "@styles/COLORS";
import ButtonDefault from "@UIComponents/buttons/ButtonDefault";
import { Badge, Divider } from "antd";
import BOOKING_STATUS from "@enums/BOOKING_STATUS.enum";
import TextPulse from "@UIComponents/TextPulse";
import DateFns from "date-fns";
import { formattedTime } from "helpers/formatDate";

export interface IBookingJobsCardProps {
  booking: Booking;
  onClick: (id, booking) => any;
  [prop: string]: any;
}

const StyledField = styled.div`
  ${tw``}
`;
export function BookingJobsCard({
  booking,
  onClick,
  ...props
}: IBookingJobsCardProps) {
  const {
    service,
    address,
    date,
    user,
    id,
    checkin_time,
    checkout_time,
    booking_status,
  } = booking;

  const [currentDuration, setCurrentDuration] = React.useState(
    checkin_time
      ? (parseInt(checkout_time) || Date.now()) - parseInt(checkin_time)
      : 0
  );

  const intervalRef = React.useRef<any>();

  React.useEffect(() => {
    if (booking_status === BOOKING_STATUS.ONGOING) {
      intervalRef.current = setInterval(() => {
        setCurrentDuration((currentDuration) =>
          checkin_time ? Date.now() - parseInt(checkin_time) : 0
        );
      }, 1000);
    } else if (intervalRef.current) {
      console.log(intervalRef.current, "hello");
      clearInterval(intervalRef.current);
    }
    return () => {
      console.log("destroyed", intervalRef.current);
      clearInterval(intervalRef.current);
    };
    //edit
  }, []);

  return (
    <div>
      <div className="px-5 py-5 flex gap-12">
        <StyledField>
          <BaseText fontSize="1rem">Type</BaseText>
          <Paragraph>{service?.name}</Paragraph>
        </StyledField>
        <StyledField>
          <BaseText fontSize="1rem">Customer</BaseText>
          <Paragraph>
            {user?.firstname} {user?.lastname}
          </Paragraph>
        </StyledField>
        <StyledField className="w-96">
          <BaseText fontSize="1rem">Address</BaseText>
          <Paragraph>{address}</Paragraph>
        </StyledField>
        <StyledField>
          <BaseText fontSize="1rem">Duration</BaseText>
          <Paragraph>{formattedTime(currentDuration)}</Paragraph>
        </StyledField>
        <StyledField className="mr-auto">
          <BaseText fontSize="1rem">Date</BaseText>
          <Paragraph className="w-max">
            {format(new Date(date), "dd-MM-yy")}
          </Paragraph>
        </StyledField>

        {booking.booking_status === BOOKING_STATUS.COMPLETED ||
        booking.booking_status === BOOKING_STATUS.PAID ? (
          <TextPulse
            color={
              booking.booking_status === BOOKING_STATUS.COMPLETED
                ? "yellow"
                : "green"
            }
            size="default"
            status="warning"
            className="self-center"
          >
            {booking.booking_status === BOOKING_STATUS.COMPLETED
              ? "Confirmed"
              : "Paid"}
          </TextPulse>
        ) : (
          <div className="ml-auto grid gap-4 w-max self-center">
            <ButtonDefault
              onClick={() => onClick(id, booking)}
              className="w-max"
            >
              {booking.booking_status === BOOKING_STATUS.ASSIGNED
                ? "Check-In"
                : "Check-Out"}
            </ButtonDefault>
            <ButtonDefault>Cancel</ButtonDefault>
          </div>
        )}
      </div>
      <Divider />
    </div>
  );
}
