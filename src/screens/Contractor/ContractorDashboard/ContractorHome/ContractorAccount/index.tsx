import BOOKING_STATUS from "@enums/BOOKING_STATUS.enum";
import { getUserAttributes } from "@services/api";
import {
  acceptBooking,
  getServiceBookings,
  updateBooking,
} from "@services/api/bookings";
import ButtonDefault from "@UIComponents/buttons/ButtonDefault";
import { BookingRequestCard } from "@UIComponents/cards/BookingRequestCard";
import H3 from "@UIComponents/Typography/H3";
import H5 from "@UIComponents/Typography/H5";
import { Col, Comment, Rate, Row, Statistic, Tooltip } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Paragraph from "antd/lib/typography/Paragraph";
import { observer } from "mobx-react";
import * as React from "react";
import { useRootStore } from "store";
import { Booking } from "types/Booking";
import Contractor from "types/Contractor";
import Id from "types/Id";

export interface IContractorAccountProps {}

export const ContractorAccount = observer((props: IContractorAccountProps) => {
  const {
    authStore: { user, getUserProfile },
  } = useRootStore();

  const [bookings, setBookings] = React.useState<Booking[]>([]);

  const [contractor, setContractor] = React.useState<Contractor>();

  const getRequestedBookings = async () => {
    const res = await getServiceBookings({
      service_id: (await getUserAttributes())["custom:service_id"],
    });
    console.log("res", res);
    setBookings(res);
    return res;
  };

  React.useEffect(() => {
    (async () => {
      try {
        await getRequestedBookings();
        await getUserProfile();
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const onAccept = async (id: Id, booking: Booking) => {
    try {
      const res = await acceptBooking({ id });
      await getRequestedBookings();
      console.log("res", res);
    } catch (error) {
      console.log(error);
    }
  };

  const completedBookings = bookings.filter(
    (booking) => booking.booking_status === BOOKING_STATUS.PAID
  );

  const requestedBookings = bookings.filter(
    (booking) => booking.booking_status !== BOOKING_STATUS.PAID
  );

  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Completed Jobs" value={completedBookings.length} />
        </Col>
        <Col span={12}>
          <Statistic title="Requested Jobs" value={requestedBookings.length} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Account Balance"
            value={user ? (user as Contractor).account : 0}
            precision={2}
          />
          <ButtonDefault style={{ marginTop: 16 }} type="primary">
            Recharge
          </ButtonDefault>
        </Col>
        <Col span={12}>
          <Paragraph>Rating</Paragraph>
          <Rate
            count={5}
            value={user ? (user as Contractor).rating : 0}
            disabled
          />
        </Col>
      </Row>
      <H5 className="mt-7">Comments</H5>
      {bookings
        .filter((booking) => booking.comment || booking.rating)
        .map((booking) => (
          <>
            <Comment
              // actions={actions}
              author={`${booking.user.firstname} booking_id: ${booking.id}`}
              avatar={
                <Avatar
                  src="https://joeschmoe.io/api/v1/random"
                  alt="Han Solo"
                />
              }
              content={
                <>
                  {booking.rating && (
                    <Rate
                      count={5}
                      value={booking.rating}
                      disabled
                    />
                  )}
                  {booking.comment && <p>{booking.comment}</p>}
                </>
              }

              // datetime={
              // <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              //   <span>{moment().fromNow()}</span>
              // </Tooltip>
              // }
            />
          </>
        ))}
    </div>
  );
});
