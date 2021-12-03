import Screen from "@UIComponents/layout/Screen";
import * as React from "react";
import Header from "./Header";
import Intro from "./Intro";

interface ILandingPageProps {}

const LandingPage: React.FunctionComponent<ILandingPageProps> = (props) => {
  return (
    <Screen>
      <Header />
      <Intro />
    </Screen>
  );
};

export default LandingPage;
