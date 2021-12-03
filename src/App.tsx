import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "@screens/Landing";
import ROUTES from "@constants/ROUTES";
import ContractorRegistration from "@screens/Contractor/ContractorRegistration";
import ContractorDashboard from "@screens/Contractor/ContractorDashboard";
import awsConfig from "./aws-exports";
import Amplify, { Auth } from "aws-amplify";
import { getUsers } from "@services/api/users";
import { RootStoreProvider } from "store";
import { MakeBooking, UserHome } from "@screens/User/UserDashboard";
import { UserSignIn, UserRegistration } from "@screens/User/UserAuthentication";

Amplify.configure(awsConfig);

function App() {
  useEffect(() => {
    (async () => {
      try {
        const users = await getUsers({});
        console.log("users", users);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
            element={<ContractorDashboard />}
          />
          <Route path={ROUTES.MakeBooking} element={<MakeBooking />} />
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
