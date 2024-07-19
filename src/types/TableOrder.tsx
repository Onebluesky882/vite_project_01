import { MenuCartItem, MenuItem } from "./MenuItem";

export type TableOrder = MenuItem & {
  cart: MenuCartItem[];
  tebleId: number;
  no: number;
  status: string;
};
