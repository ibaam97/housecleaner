const DEFAULT_PRICE = require("./constants/PRICE");
const { getBooking, updateBooking } = require("./services/api/bookings");
const {
  getContractor,
  updateContractor,
} = require("./services/api/contractors");
const { createPayment } = require("./services/api/payments");

const stripe = require("stripe")("sk_test_p7P5ObZI6hVyZtQjfGzkfCij");

async function postCharge(req, res) {
  try {
    const { source } = req.body;
    const user = req.apiGateway.event.requestContext.authorizer?.claims;
    console.log(user, "user");
    if (!user) return res.json({ message: user });
    const booking_id = req.params.id;
    const booking = (await getBooking(booking_id))?.data?.getBooking;

    console.log("booking", booking);

    if (
      !(
        booking?.checkin_time &&
        booking?.checkout_time &&
        booking?.booking_status !== "PAID"
      )
    )
      return res.status("400").json("Booking not valid");

    const {
      checkin_time,
      checkout_time,
      service,
      contractor_id,
      user_id,
      contractor,
    } = booking;

    const duration = parseInt(checkout_time) - parseInt(checkin_time);

    console.log("duration", duration);

    const actualAmount = parseInt(
      (service.pricePerMiunute || DEFAULT_PRICE) *
        (duration / (1000 * 60)) *
        100
    );

    const amount = actualAmount < 100 ? 100 : actualAmount;

    console.log("amount", amount);

    const charge = await stripe.charges.create({
      amount,
      currency: "usd",
      source,
      receipt_email: user.email,
    });

    if (!charge) throw new Error("charge unsuccessful");

    const { id, currency } = charge;

    const [updatedContractor, createdPayment, updatedBooking] =
      await Promise.all([
        updateContractor(contractor_id, {
          account: contractor.account
            ? contractor.account + amount * 0.5
            : amount * 0.5,
        }),
        createPayment({
          id,
          currency,
          amount,
          booking_id,
          user_id,
          contractor_id,
          date: Date.now(),
        }),
        updateBooking(booking_id, {
          booking_status: "PAID",
          payment_id: id,
        }),
      ]);

    console.log(
      updatedBooking,
      createdPayment,
      updatedContractor,
      "updateBooking"
    );

    res.status(200).json({
      payment: createdPayment,
      message: "charge posted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = postCharge;
