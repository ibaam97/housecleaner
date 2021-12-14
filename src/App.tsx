import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "@screens/Landing";
import ROUTES from "@constants/ROUTES";
import awsConfig from "./aws-exports";
import Amplify, { Auth } from "aws-amplify";
import { RootStoreProvider } from "store";
import {
  MakeBooking,
  UserBookings,
  UserHome,
} from "@screens/User/UserDashboard";
import { UserSignIn, UserRegistration } from "@screens/User/UserAuthentication";
import { ContractorHome } from "@screens/Contractor/ContractorDashboard";
import ContractorRegistration from "@screens/Contractor/ContractorAuthentication/ContractorRegistration";
import { UserVerifyUser } from "@screens/User/UserAuthentication/UserVerifyUser";
import { ContractorVerifyUser } from "@screens/Contractor/ContractorAuthentication/ContractorVerifyUser";
import { UserSettings } from "@screens/User/UserDashboard/UserSettings";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PK } from "@constants/KEYS";
import { PayForBooking } from "@screens/User/UserDashboard/PayForBooking";
import { Elements } from "@stripe/react-stripe-js";
import ContractorSignIn from "@screens/Contractor/ContractorAuthentication/ContractorSignin";
// import UserBooking from "@screens/User/UserDashboard/UserBooking";

Amplify.configure(awsConfig);

const stripePromise = loadStripe(STRIPE_PK);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <RootStoreProvider>
          <Routes>
            <Route path={ROUTES.LandingScreen} element={<LandingPage />} />
            <Route
              path={ROUTES.UserRegistration}
              element={<UserRegistration />}
            />
            <Route path={ROUTES.UserVerifyUser} element={<UserVerifyUser />} />
            <Route
              path={ROUTES.ContractorVerifyUser}
              element={<ContractorVerifyUser />}
            />
            <Route path={ROUTES.UserSignIn} element={<UserSignIn />} />
            <Route path={ROUTES.ContractorSignIn} element={<ContractorSignIn />} />
            <Route path={ROUTES.UserDashboard} element={<UserHome />} />
            <Route path={ROUTES.UserSettings} element={<UserSettings />} />
            <Route
              path={ROUTES.ContractorDashboard}
              element={<ContractorHome />}
            />
            <Route path={ROUTES.MakeBooking} element={<MakeBooking />} />
            <Route path={ROUTES.PayForBooking} element={<PayForBooking />} />
            <Route path={ROUTES.UserBookings} element={<UserBookings />} />
            {/* <Route path={ROUTES.UserBooking} element={<UserBooking />} /> */}
            <Route
              path={ROUTES.ContractorRegistration}
              element={<ContractorRegistration />}
            />
          </Routes>
        </RootStoreProvider>
      </BrowserRouter>
    </Elements>
  );
}

export default App;
