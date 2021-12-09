import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Section from "@UIComponents/layout/Section";
import Screen from "@UIComponents/layout/Screen";
import { BookingRequestCard } from "@UIComponents/cards/BookingRequestCard";
import { ContractorRequests } from "./ContractorRequests";
import { ContractorJobs } from "./ContractorJobs";
import { API, Auth } from "aws-amplify";
import { restRequest } from "@services/api/config";

export interface IContractorHomeProps {}

export function ContractorHome(props: IContractorHomeProps) {
  const [currentTab, setCurrentTab] = useState("requests");

  useEffect(() => {
    (async () => {

    })();
  }, []);

  const switchTab = (e) => {
    console.log("click ", e);
    setCurrentTab(e.key);
  };

  let displayedTab;
  switch (currentTab) {
    case "requests":
      displayedTab = <ContractorRequests />;
      break;

    case "bookings":
      displayedTab = <ContractorJobs />;
      break;

    default:
      displayedTab = <ContractorRequests />;
      break;
  }

  return (
    <Screen>
      <Section>
        <div className="bg-white p-6">
          <Menu
            onClick={switchTab}
            selectedKeys={[currentTab]}
            mode="horizontal"
            className="mb-10"
          >
            <Menu.Item key="requests" icon={<MailOutlined />}>
              Navigation One
            </Menu.Item>
            <Menu.Item key="bookings" icon={<AppstoreOutlined />}>
              Navigation Two
            </Menu.Item>
          </Menu>
          <div>{displayedTab}</div>
        </div>
      </Section>
    </Screen>
  );
}

export default ContractorHome;
