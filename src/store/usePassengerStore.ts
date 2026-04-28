import { create } from "zustand";

export interface PassengerDetails {
  name: string;
  ticketNo: string;
}

interface PassengerStore {
  passengers: PassengerDetails[];

  addPassenger: () => void;
  updatePassenger: (ticketNo: string, updated: Partial<PassengerDetails>) => void;
  removePassenger: (ticketNo: string) => void;
  setPassengers: (passengers: PassengerDetails[]) => void;
}

export const usePassengerStore = create<PassengerStore>((set) => ({
  passengers: [],

  addPassenger: () =>
    set((state) => ({
      passengers: [
        ...state.passengers,
        {
          name: "",
          ticketNo: "",
        },
      ],
    })),

  updatePassenger: (ticketNo, updated) =>
    set((state) => ({
      passengers: state.passengers.map((p) => (p.ticketNo === ticketNo ? { ...p, ...updated } : p)),
    })),

  removePassenger: (ticketNo) =>
    set((state) => ({
      passengers: state.passengers.filter((p) => p.ticketNo !== ticketNo),
    })),

  setPassengers: (passengers) =>
    set(() => ({
      passengers,
    })),
}));
