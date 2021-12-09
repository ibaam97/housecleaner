const ROUTES = {
  UserRegistration: "/user/registration",
  UserSignIn: "/user/signin",
  ContractorRegistration: "/contractor/registration",
  ContractorSignUp: "/user/signin",
  LandingScreen: "/",
  UserDashboard: "/user/dashboard",
  UserSettings: "/user/settings",
  ContractorDashboard: "/contractor/dashboard",
  Services: "/services",
  Service: "/services/:id",
  getServiceRoute: (id) => ROUTES.Service.replace(":id", id),
  UserBookings: "/user/bookings",
  UserBooking: "/user/bookings/:id",
  MakeBooking: "/user/bookings/make/:id",
  ContractorVerifyUser: "/contractor/verify/:email",
  UserVerifyUser: "/user/verify/:email",
  getVerifyUser: (email) => ROUTES.UserVerifyUser.replace(":email", email),
  getMakeBookingRoute: (id) => ROUTES.MakeBooking.replace(":id", id),
};

export default ROUTES;
