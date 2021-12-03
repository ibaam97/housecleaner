import { ServiceCard } from "@UIComponents/cards/ServiceCard";
import H2 from "@UIComponents/Typography/H2";
import Paragraph from "@UIComponents/Typography/Paragraph";
import * as React from "react";
import services from "@testdata/services";
import tw from "twin.macro";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return (
    <div className="bg-primary-900 flex justify-center items-center">
      <div className="text-center p-20 w-full">
        <H2 className="text-white mb-8">Welcome to nanny house</H2>
        <Paragraph className="text-white mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Paragraph>
        <div className="grid grid-cols-3 gap-x-10" >
          {services.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
