import { Order } from "./Order";

export type Table = {
  no: string; // table no
  status: "AVAILABLE" | "OCCUPIED" | "BOOKED" | "CLEANING";
  seat?: number;
};

export type TableOrders = {
  order: Order[];
  transectionID: string;
  paymentStatus: "COMPLETE" | "CHECK";
};
