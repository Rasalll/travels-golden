"use client";
import { useEffect } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import PassengerDetailsForm from "./PassengerDetailsForm";

import { flightDetails, passengerDetails } from "@/constants/db";
import { useFlightStore } from "@/store/useFlightStore";
import { usePassengerStore } from "@/store/usePassengerStore";
import FlightDetailsForm from "./FlightDetailsForm";
import UploadFile from "./UploadFile";
import { IS_DEV } from "@/constants/data";

export default function UploadPDFView() {
  const { setPassengers } = usePassengerStore();
  const { setFlights } = useFlightStore();

  useEffect(() => {
    setPassengers(IS_DEV ? passengerDetails : []);
    setFlights(IS_DEV ? flightDetails : []);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <ComponentCard className="xl:col-span-3 sm:col-span-3" title={"PDFs Management"}>
        <UploadFile />
        <div className="grid grid-cols-2 gap-2 items-start ">
          <PassengerDetailsForm />
        </div>
        <FlightDetailsForm />
        {/* <div className="grid grid-cols-2 gap-2 items-start ">
          <PaymentForm />
        </div> */}
      </ComponentCard>
    </div>
  );
}
