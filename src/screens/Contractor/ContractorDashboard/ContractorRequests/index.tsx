import { BookingRequestCard } from "@UIComponents/cards/BookingRequestCard";
import * as React from "react";

export interface IContractorRequestsProps {}

export function ContractorRequests(props: IContractorRequestsProps) {
  return (
    <div>
      <div className="grid">
        <BookingRequestCard />
        <BookingRequestCard />
        <BookingRequestCard />
      </div>
    </div>
  );
}
