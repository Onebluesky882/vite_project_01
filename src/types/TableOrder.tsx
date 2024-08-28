import { Order } from "./Order";

export type Table = {
  no: "A1" | "A2" | "A3" | "A4" | "A5" | "B1" | "B2" | "B3" | "B4"; // table no
  status: "AVAILABLE" | "BOOKED" | "CLEANING";
  seat: number;
};

export type TableOrders = {
  order: Order[];
  transectionID: string;
  paymentStatus: "COMPLETE" | "CHECK";
};
