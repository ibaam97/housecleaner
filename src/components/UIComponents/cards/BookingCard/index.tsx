import { BaseText } from "@UIComponents/Typography/BaseText";
import Paragraph from "@UIComponents/Typography/Paragraph";
import * as React from "react";
import { Booking } from "types/Booking";
import { CustomCard } from "../CustomCard";
import { format } from "date-fns";
import styled from "styled-components";
import tw from "twin.macro";
import COLORS from "@styles/COLORS";
import Screen from "@UIComponents/layout/Screen";
import Section from "@UIComponents/layout/Section";
import { Badge, Descriptions, Rate } from "antd";
import ButtonDefault from "@UIComponents/buttons/ButtonDefault";
import { useNavigate } from "react-router-dom";
import ROUTES from "@constants/ROUTES";
import BOOKING_STATUS from "@enums/BOOKING_STATUS.enum";
import FormTextArea from "@UIComponents/form/FormTextArea";
import { createReview } from "@services/api/bookings";
import Avatar from "antd/lib/avatar/avatar";
import { Storage } from "aws-amplify";
export interface IBookingCardProps {
  booking: Booking;
  onDelete,
  [prop: string]: any;
}

const StyledField = styled.div`
  ${tw`bg-white p-4`}
`;
export function BookingCard({
  booking,
  isContractor,
  onDelete,
  ...props
}: IBookingCardProps) {
  const navigate = useNavigate();

  const {
    service,
    contractor,
    booking_status,
    address,
    county,
    date,
    id,
    user,
  } = booking;

  const [isReviewing, setIsReviewing] = React.useState<boolean>(false);

  const [rating, setRating] = React.useState<number>(0);

  const [comment, setComment] = React.useState<string>("");

  const [contractorImage, setContractorImage] = React.useState<string>("");

  const onPayHandler = () => {
    navigate(ROUTES.getPayForBooking(id), { state: { booking } });
  };

  const submitReview = async () => {
    try {
      console.log({
        booking_id: booking.id,
        comment: comment || null,
        rating: rating || null,
      });
      const res = await createReview({
        booking_id: booking.id,
        comment: comment || null,
        rating: rating || null,
      });
      setIsReviewing(false);
      console.log(res, "nnjj");
    } catch (error) {
      console.log(error, { ...error });
    }
  };

  let button;

  switch (booking_status) {
    case BOOKING_STATUS.COMPLETED:
      button = (
        <ButtonDefault className="flex-1" onClick={onPayHandler}>
          Pay
        </ButtonDefault>
      );
      break;

    case BOOKING_STATUS.PAID:
      button = (
        <ButtonDefault className="flex-1" onClick={() => setIsReviewing(true)}>
          Review
        </ButtonDefault>
      );
      break;

    default:
      button = (
        <ButtonDefault className="flex-1" onClick={() => onDelete(id)}>
          Cancel
        </ButtonDefault>
      );
      break;
  }

  console.log(contractor);

  React.useEffect(() => {
    (async () => {
      try {
        if (contractor?.image)
          setContractorImage(await Storage.get(contractor.image));
      } catch (error) {
        console.log(error);
      }
    })();
  });

  return (
    <div className="flex gap-6">
      <img
        src={contractorImage}
        className="bg-gray-400 object-cover object-center h-40 w-40 rounded-full"
      />
      <div>
        <Descriptions bordered className="bg-gray-200">
          <Descriptions.Item label="Service" span={2}>
            {service.name}
          </Descriptions.Item>
          <Descriptions.Item label="County" span={2}>
            {county}
          </Descriptions.Item>
          <Descriptions.Item label="Booking Date" span={2}>
            {format(new Date(date), "dd-mm-yy")}
          </Descriptions.Item>
          <Descriptions.Item
            label={isContractor ? "Customer" : "Contractor"}
            span={2}
          >
            {isContractor
              ? user?.firstname
              : contractor?.firstname || "Requested"}
          </Descriptions.Item>
          <Descriptions.Item
            label="Address"
            span={2}
            contentStyle={{ width: "20rem" }}
          >
            {address}
          </Descriptions.Item>
          <Descriptions.Item
            label="Status"
            span={2}
            contentStyle={{ width: "20rem" }}
          >
            <Badge status="processing" text={booking_status} />
          </Descriptions.Item>
        </Descriptions>
        {!isContractor &&
          (!isReviewing ? (
            <div className="flex mt-3 gap-4 w-72">{button}</div>
          ) : (
            <div className="bg-white p-4 mt-8">
              <FormTextArea
                name="comment"
                value={comment}
                label="Comment"
                onChange={(e) => console.log(e.target.value)}
              />
              <Rate
                count={5}
                value={rating}
                onChange={(val) => setRating(val)}
              />
              <ButtonDefault
                className="ml-auto"
                onClick={() => (rating || comment) && submitReview()}
              >
                Submit
              </ButtonDefault>
            </div>
          ))}
      </div>
    </div>
  );
}
