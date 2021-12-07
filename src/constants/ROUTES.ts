const ROUTES = {
  UserRegistration: "/user/registration",
  UserSignIn: "/user/signin",
  ContractorRegistration: "/contractor/registration",
  ContractorSignUp: "/user/signin",
  LandingScreen: "/",
  UserDashboard: "/user/dashboard",
  ContractorDashboard: "/contractor/dashboard",
  Services: "/services",
  Service: "/services/:id",
  getServiceRoute: (id) => ROUTES.Service.replace(":id", id),
  UserBookings: "/user/bookings",
  UserBooking: "/user/bookings/:id",
  MakeBooking: "/user/bookings/make/:id",
  ContractorVerifyUser: "/contractor/verify/:email",
  UserVerifyUser: "/user/verify/:email",
  getMakeBookingRoute: (id) => ROUTES.MakeBooking.replace(":id", id),
};

export default ROUTES;
