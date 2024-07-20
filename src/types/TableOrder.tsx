export type Table = {
  id: number; // table no
  status: "AVAILABLE" | "OCCUPIED" | "BOOKED" | "CLEANING";
  seat: number;
};

// enum TableStatusEnum {
//   AVALIABLE,
//   OCCUPIED,
//   BOOKED,
//   CLEANING
// }
