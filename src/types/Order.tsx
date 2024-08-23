export type CartOrder = {
  menuId: string;
  amount: number;
};

export type Order = {
  id: string;
  menuId: string; // การดึงค่า จาก CartOrder ทำการ map มาวางทับ
  status: "ORDERED" | "COOKING" | "DONE";
  amount: number; // การดึงค่า จาก CartOrder ทำการ map มาวางทับ
  createdAt: string;
  doneAt?: string;
};
