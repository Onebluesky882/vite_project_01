export type MenuGroup = {
  id: string;
  name: string;
  img: string;
  position: string;
};

export const table = [
  {
    tableNo: "A1",
    status: "OCCUPIED",
    position: "left",
  },
  {
    tableNo: "A2",
    status: "AVAILABLE",
    position: "left",
  },
  {
    tableNo: "A3",
    status: "AVAILABLE",
    position: "left",
  },
  {
    tableNo: "A4",
    status: "AVAILABLE",
    position: "left",
  },
  {
    tableNo: "A5",
    status: "AVAILABLE",
    position: "left",
  },
  {
    tableNo: "B1",
    status: "AVAILABLE",
    position: "right",
  },
  {
    tableNo: "B2",
    status: "AVAILABLE",
    position: "right",
  },
  {
    tableNo: "B3",
    status: "AVAILABLE",
    position: "right",
  },
  {
    tableNo: "B4",
    status: "AVAILABLE",
    position: "right",
  },
];

export default table;