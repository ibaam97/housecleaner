import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "@screens/Landing";
import ROUTES from "@constants/ROUTES";
import awsConfig from "./aws-exports";
import Amplify, { Analytics, Auth } from "aws-amplify";
import { RootStoreProvider, useRootStore } from "store";
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
import { MAPS_API, STRIPE_PK } from "@constants/KEYS";
import { PayForBooking } from "@screens/User/UserDashboard/PayForBooking";
import { Elements } from "@stripe/react-stripe-js";
import ContractorSignIn from "@screens/Contractor/ContractorAuthentication/ContractorSignin";
import USER_TYPE from "@enums/USER_TYPE.enum";
import { observer } from "mobx-react";
import Screen from "@UIComponents/layout/Screen";
import H2 from "@UIComponents/Typography/H2";
import { ContractorSettings } from "@screens/Contractor/ContractorDashboard/ContractorSettings";
import Sentiment from "sentiment";
import {AddressMapHelper} from "helper-aws-comp-lib"

// import MapIframe from "FormHelper/MapIframe";

Amplify.configure(awsConfig);

Analytics.enable();

Analytics.autoTrack("session", {
  enable: true,
});

Analytics.autoTrack("pageView", {
  enable: true,
  eventName: "pageView",
  type: "SPA",
  provider: "AWSPinpoint",
  getUrl: () => {
    return window.location.origin + window.location.pathname;
  },
});

const stripePromise = loadStripe(STRIPE_PK);

const App = observer(() => {
  const {
    authStore: { user },
  } = useRootStore();

  const sentiment = new Sentiment();

  const result = sentiment.analyze(
    `When I'm in an elevator with another person and it's getting kind of close to whoever's stop is first, I open up the conversation with, "Don't you just love a good awkward silence in an elevator?" If they respond positively, the conversation will usually form from there. If they respond negatively or not at all, you can say, "Keeping the silence alive. I can respect it." Then the ride is probably about over for one of you. Helps get you more familiar with starting a conversation with a stranger.`
  );

  console.log(result, "resss");

  console.log(user, "user");

  useEffect(() => {
    (async () => {})();
  }, []);
  return (
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.LandingScreen} element={<LandingPage />} />
          <Route
            path={ROUTES.UserRegistration}
            element={<UserRegistration />}
          />
          <Route path={ROUTES.UserVerifyUser} element={<UserVerifyUser />} />
          <Route path={ROUTES.UserSignIn} element={<UserSignIn />} />
          {user?.type === USER_TYPE.User && (
            <>
              <Route path={ROUTES.UserDashboard} element={<UserHome />} />
              <Route path={ROUTES.UserSettings} element={<UserSettings />} />

              <Route path={ROUTES.MakeBooking} element={<MakeBooking />} />
              <Route path={ROUTES.PayForBooking} element={<PayForBooking />} />
              <Route path={ROUTES.UserBookings} element={<UserBookings />} />
            </>
          )}
          {/* <Route path={ROUTES.UserBooking} element={<UserBooking />} /> */}
          <Route
            path={ROUTES.ContractorVerifyUser}
            element={<ContractorVerifyUser />}
          />
          <Route
            path={ROUTES.ContractorSignIn}
            element={<ContractorSignIn />}
          />
          <Route
            path={ROUTES.ContractorRegistration}
            element={<ContractorRegistration />}
          />
          {user?.type === USER_TYPE.Contractor && (
            <>
              <Route
                path={ROUTES.ContractorDashboard}
                element={<ContractorHome />}
              />
              <Route
                path={ROUTES.ContractorSettings}
                element={<ContractorSettings />}
              />
            </>
          )}
          <Route
            path="*"
            element={
              <Screen className="">
                <div className="min-h-vh flex items-center justify-center">
                  <H2>Page Does Not Exist</H2>
                </div>
              </Screen>
            }
          />
        </Routes>
      </BrowserRouter>
      {/* <MapIframe /> */}
    </Elements>
  );
});

export default App;
