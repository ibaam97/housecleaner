import ROUTES from "@constants/ROUTES";
import Paragraph from "@UIComponents/Typography/Paragraph";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import * as React from "react";
import { Link } from "react-router-dom";
import Service from "types/Service";
import { CustomCard } from "../CustomCard";

export interface IServiceCardProps {
  service: Service;
}

export function ServiceCard({ service: { name, id } }: IServiceCardProps) {
  return (
    <Link to={ROUTES.getMakeBookingRoute(id)}>
      <CustomCard>
        <img
          className="h-72 object-cover w-full"
          alt="example"
          src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80"
        />
        <Paragraph className="text-center py-4">{name}</Paragraph>
      </CustomCard>
    </Link>
  );
}
