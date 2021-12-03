import ROUTES from "@constants/ROUTES";
import { Menu } from "antd";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useRootStore } from "store";
import Section from "../Section";

export interface INavigationHeaderProps {}

export function NavigationHeader(props: INavigationHeaderProps) {
  const { authStore } = useRootStore();

  const navigate = useNavigate();

  return (
    <Section className="py-0">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        {new Array(10).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })}
        <Menu.Item
          onClick={async () => {
            await authStore.logOut();
            navigate(ROUTES.LandingScreen);
          }}
        >
          Log Out
        </Menu.Item>
      </Menu>
    </Section>
  );
}
