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
// import UserBooking from "@screens/User/UserDashboard/UserBooking";

Amplify.configure(awsConfig);

function App() {
  return (
    <BrowserRouter>
      <RootStoreProvider>
        <Routes>
          <Route path={ROUTES.LandingScreen} element={<LandingPage />} />
          <Route
            path={ROUTES.UserRegistration}
            element={<UserRegistration />}
          />
          <Route path={ROUTES.UserSignIn} element={<UserSignIn />} />
          <Route path={ROUTES.UserDashboard} element={<UserHome />} />
          <Route
            path={ROUTES.ContractorDashboard}
            element={<ContractorHome />}
          />
          <Route path={ROUTES.MakeBooking} element={<MakeBooking />} />
          <Route path={ROUTES.UserBookings} element={<UserBookings />} />
          {/* <Route path={ROUTES.UserBooking} element={<UserBooking />} /> */}
          <Route
            path={ROUTES.ContractorRegistration}
            element={<ContractorRegistration />}
          />
        </Routes>
      </RootStoreProvider>
    </BrowserRouter>
  );
}

export default App;
