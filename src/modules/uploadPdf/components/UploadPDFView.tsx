"use client";
import { useEffect } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import PassengerDetailsForm from "./PassengerDetailsForm";

import { flightDetails, passengerDetails } from "@/constants/db";
import { useFlightStore } from "@/store/useFlightStore";
import { usePassengerStore } from "@/store/usePassengerStore";
import FlightDetailsForm from "./FlightDetailsForm";

export default function UploadPDFView() {
  const { setPassengers } = usePassengerStore();
  const { setFlights } = useFlightStore();

  useEffect(() => {
    setPassengers(passengerDetails);
    setFlights(flightDetails);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <ComponentCard className="xl:col-span-3 sm:col-span-3" title={"PDFs Management"}>
        <div className="grid grid-cols-2 gap-2 items-start ">
          <PassengerDetailsForm />
        </div>
        <FlightDetailsForm />
      </ComponentCard>
    </div>
  );
}
