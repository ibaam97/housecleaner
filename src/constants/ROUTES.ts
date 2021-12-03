const ROUTES = {
  UserRegistration: "/user/registration",
  UserSignIn: "/user/signin",
  ContractorRegistration: "/contractor/registration",
  LandingScreen: "/",
  UserDashboard: "/user/dashboard",
  ContractorDashboard: "/contractor/dashboard",
  Services: "/services",
  Service: "/services/:id",
  getServiceRoute: (id) => ROUTES.Service.replace(":id", id),
  UserBookings: "/user/bookings",
  MakeBooking: "/user/bookings/make/:id",
  getMakeBookingRoute: (id) => ROUTES.MakeBooking.replace(":id", id),
};

export default ROUTES;
