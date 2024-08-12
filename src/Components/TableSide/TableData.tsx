export type TableType = {
  no: string;
  status: "Available" | "Reserved" | "Occupied";
  slug: string;
};

export const tableLeftBar = [
  {
    no: "A1",
    status: "Available",
    slug: "table/a1",
  },
  {
    no: "A2",
    status: "Reserved",
    slug: "table/a2",
  },
  {
    no: "A3",
    status: "Reserved",
    slug: "table/a3",
  },
  {
    no: "A4",
    status: "Occupied",
    slug: "table/a4",
  },
  {
    no: "A5",
    status: "Occupied",
    slug: "taAle/a5",
  },
];

export const tableRightBar = [
  {
    no: "B1",
    status: "Occupied",
    slug: "table/b1",
  },
  {
    no: "B2",
    status: "Available",
    slug: "table/b2",
  },
  {
    no: "B3",
    status: "Reserved",
    slug: "table/b3",
  },
  {
    no: "B4",
    status: "Available",
    slug: "table/b4",
  },
];

export default tableLeftBar;
