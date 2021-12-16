import React from "react";
import tw from "twin.macro";
import ScrollToTop from "@functional/ScrollToTop";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { NavigationHeader } from "../NavigationHeader";

const StyledScreen = tw.div`min-h-vh overflow-hidden`;

export default function Screen({ children, className="",...props }) {
  return (
    <Layout tw="min-h-vh">
      <ScrollToTop />
      <Header className="px-0">
        <NavigationHeader/>
      </Header>
      <Content className={className}>{children}</Content>
      <Footer tw="bg-gray-300">Rework ©2021 Created by Ayodeji Ibrahim</Footer>
    </Layout>
  );
}
