import Screen from "@UIComponents/layout/Screen";
import Section from "@UIComponents/layout/Section";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import * as React from "react";
import ContractorBookingsHistory from "./ContractorBookingsHistory";
import ContractorSettingsPage from "./ContractorSettingsPage";
import ContractorChangePassword from "@screens/User/UserAuthentication/UserChangePassword";

export interface IContractorSettingsProps {}

export function ContractorSettings(props: IContractorSettingsProps) {
  const [currentTab, setCurrentTab] = React.useState("settings");

  const switchTab = (e) => {
    console.log("click ", e);
    setCurrentTab(e.key);
  };

  let displayedTab;
  switch (currentTab) {
    case "settings":
      displayedTab = <ContractorSettingsPage />;
      break;

    case "history":
      displayedTab = <ContractorBookingsHistory />;
      break;

    case "password":
      displayedTab = <ContractorChangePassword />;
      break;

    // case "image":
    //   displayedTab = <ContractorImageUpload />;
    //   break;

    default:
      displayedTab = <ContractorSettingsPage />;
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
            <Menu.Item key="settings" icon={<MailOutlined />}>
              Settings
            </Menu.Item>
            <Menu.Item key="history" icon={<AppstoreOutlined />}>
              Bookings History
            </Menu.Item>
            <Menu.Item key="image" icon={<AppstoreOutlined />}>
              Change Image
            </Menu.Item>
            <Menu.Item key="password" icon={<AppstoreOutlined />}>
              Change Password
            </Menu.Item>
          </Menu>
          <div>{displayedTab}</div>
        </div>
      </Section>
    </Screen>
  );
}
