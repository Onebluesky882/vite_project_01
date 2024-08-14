export type Table = {
  id: number; // table no
  status: "AVAILABLE" | "OCCUPIED" | "BOOKED" | "CLEANING";
  seat: number;
};

type TableNoDetails = {
  id: string;
  table: string;
  status: "AVAILABLE" | "CLEANING" | "BOOKED";
  capacity: number;
  currentOrder?: {
    id: number;
    items: string[];
    total: number;
  };
};
