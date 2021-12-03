import { BookingJobsCard } from "@UIComponents/cards/BookingJobCard";
import { BookingRequestCard } from "@UIComponents/cards/BookingRequestCard";
import * as React from "react";

export interface IContractorJobsProps {}

export function ContractorJobs(props: IContractorJobsProps) {
  return (
    <div>
      <div className="grid">
        <BookingJobsCard />
        <BookingJobsCard />
        <BookingJobsCard />
      </div>
    </div>
  );
}
