import React from "react";
import CardSection from "./CardSection";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import { makePayment } from "@services/api/payment";
import { Booking } from "types/Booking";
import { useNavigate } from "react-router-dom";
import ROUTES from "@constants/ROUTES";

function CheckoutForm({ stripe, elements, booking }: {stripe, elements, booking: Booking}) {

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      if (!stripe || !elements) {
        return;
      }

      const card = elements.getElement(CardElement);
      const result = await stripe.createToken(card);
      if (result.error) {
        console.log(result.error.message);
      } else {
        console.log(result.token);
        const res = await makePayment({
          token: result.token,
          id: booking.id,
        });
        console.log(res);
        navigate(ROUTES.UserBookings)

        // pass the token to your backend API
      }
    } catch (e) {
      console.log({ ...e });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardSection />
      <button className="btn-pay">Buy Now</button>
    </form>
  );
}

export default ({booking}:{booking: Booking}) => (
  <ElementsConsumer>
    {({ stripe, elements }) => (
      <CheckoutForm stripe={stripe} elements={elements} booking={booking}/>
    )}
  </ElementsConsumer>
);
