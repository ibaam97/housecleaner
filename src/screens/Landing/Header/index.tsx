import H2 from "@UIComponents/Typography/H2";
import Paragraph from "@UIComponents/Typography/Paragraph";
import * as React from "react";
import tw from "twin.macro";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <div className="h-128 bg-primary-900 flex justify-center items-center">
      <div className="p-24 text-center">
        <H2 className="text-white mb-8">Welcome to nanny house</H2>
        <Paragraph className="text-white max-w-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi minus
          ipsa iste laboriosam tempora necessitatibus architecto, eveniet
          corrupti officia quo, praesentium vel, nobis maxime quam consequuntur
          mollitia nihil. Repudiandae, aperiam.
        </Paragraph>
      </div>
    </div>
  );
}
