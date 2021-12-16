import ROUTES from "@constants/ROUTES";
import USER_TYPE from "@enums/USER_TYPE.enum";
import Paragraph from "@UIComponents/Typography/Paragraph";
import { Menu } from "antd";
import { observer } from "mobx-react";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useRootStore } from "store";
import Section from "../Section";

export interface INavigationHeaderProps {}

export const NavigationHeader = observer((props: INavigationHeaderProps) => {
  const { authStore } = useRootStore();

  const user = authStore.user;
  const userType = user?.type;

  console.log(userType, "jbkjb");

  const navigate = useNavigate();

  const ContractorNavBar = (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
      <Menu.Item disabled className="cursor" >Hi {user?.firstname}</Menu.Item>
      <MenuItem to={ROUTES.ContractorDashboard}>Bookings</MenuItem>
      <MenuItem to={ROUTES.ContractorSettings}>Settings</MenuItem>

      {/* <MenuItem to={ROUTES.}>Settings</MenuItem> */}
      {/* <MenuItem to={ROUTES.UserDashboard}>Make Booking</MenuItem> */}
      <MenuItem
        onClick={async () => {
          await authStore.logOut();
          navigate(ROUTES.LandingScreen);
        }}
      >
        Log Out
      </MenuItem>
    </Menu>
  );

  const UserNavBar = (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
      <Menu.Item disabled className="cursor" >Hi {user?.firstname}</Menu.Item>
      <MenuItem to={ROUTES.UserBookings}>Bookings</MenuItem>
      <MenuItem to={ROUTES.UserSettings}>Settings</MenuItem>
      <MenuItem to={ROUTES.UserDashboard}>Make Booking</MenuItem>
      <MenuItem
        onClick={async () => {
          await authStore.logOut();
          navigate(ROUTES.LandingScreen);
        }}
      >
        Log Out
      </MenuItem>
    </Menu>
  );

  let currentNavBar = !userType ? (
    <></>
  ) : userType === USER_TYPE.User ? (
    UserNavBar
  ) : (
    ContractorNavBar
  );

  console.log(userType);

  return <Section className="py-0">{currentNavBar}</Section>;
});

const MenuItem = ({
  to,
  onClick,
  ...props
}: {
  to?: string;
  [prop: string]: any;
}) => {
  const navigate = useNavigate();

  return (
    <Menu.Item {...props} onClick={(e) => (to ? navigate(to) : onClick?.(e))} />
  );
};

export default NavigationHeader;
