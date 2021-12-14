import { ServiceCard } from "@UIComponents/cards/ServiceCard";
import H2 from "@UIComponents/Typography/H2";
import Paragraph from "@UIComponents/Typography/Paragraph";
import * as React from "react";
// import services from "@testdata/services";
import tw from "twin.macro";
import Service from "types/Service";
import { getServices } from "@services/api/services";
import { observer } from "mobx-react";
import { useRootStore } from "store";

export interface IHeaderProps {}

export const Header = (props: IHeaderProps) => {

  const {servicesStore: {getServices, services}} = useRootStore()

  console.log("inside", services)

  React.useEffect(() => {
    (async () => {
      try {
        const res = await getServices({});
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="bg-primary-900 flex justify-center items-center">
      <div className="text-center p-20 w-full">
        <H2 className="text-white mb-8">Welcome to nanny house</H2>
        <Paragraph className="text-white mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Paragraph>
        <div className="grid grid-cols-3 gap-x-10">
          {services.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default observer(Header)