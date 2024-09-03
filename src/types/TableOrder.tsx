import { Order } from "./Order";

export type Table = {
  no: string;
  status: string;
  position: string;
  seat?: number;
};

export type TableOrders = {
  order: Order[];
  transectionID: string;
  paymentStatus: "COMPLETE" | "CHECK";
};
