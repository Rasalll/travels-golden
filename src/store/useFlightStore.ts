import { create } from "zustand";

export interface FlightDetails {
  id: string; // unique key (important)
  from: string;
  to: string;

  departure: {
    time: string;
    date: string;
    airport: string;
    terminal?: string;
  };

  arrival: {
    time: string;
    date: string;
    airport: string;
    terminal?: string;
  };

  duration: string;
  stops: string;

  aircraft: string;
  airline: string;
  flightNumber?: string;

  fareType: string;
  baggage: {
    checked: string;
  };

  status: string;
}

interface FlightStore {
  flights: FlightDetails[];
  addFlight: (flight: FlightDetails) => void;
  updateFlight: (id: string, updated: Partial<FlightDetails>) => void;
  removeFlight: (id: string) => void;
  setFlights: (flights: FlightDetails[]) => void;
  clearFlights: () => void;
}

export const useFlightStore = create<FlightStore>((set) => ({
  flights: [],

  addFlight: (flight) =>
    set((state) => ({
      flights: [...state.flights, flight],
    })),

  updateFlight: (id, updated) =>
    set((state) => ({
      flights: state.flights.map((f) => (f.id === id ? { ...f, ...updated } : f)),
    })),

  removeFlight: (id) =>
    set((state) => ({
      flights: state.flights.filter((f) => f.id !== id),
    })),

  setFlights: (flights) =>
    set(() => ({
      flights,
    })),

  clearFlights: () =>
    set(() => ({
      flights: [],
    })),
}));
