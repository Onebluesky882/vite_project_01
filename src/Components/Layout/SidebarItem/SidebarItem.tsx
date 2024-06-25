import { SVG } from "@/assets/svg/SVG";

export interface SideBarItemProps {
  id: number;
  name: string;
  slug: string;
  img: string;
}
export const leftMenuList = [
  { id: 0, name: "Pork", slug: "/pork", img: SVG.pork },
  { id: 1, name: "Beef", slug: "/beef", img: SVG.beef },
  { id: 2, name: "Seafood", slug: "/seafood", img: SVG.seafood },
  { id: 3, name: "Vegetable", slug: "/vegetable", img: SVG.vegetable },
];

export const rightMenuList = [
  { id: 0, name: "Noodle", slug: "/noodle", img: SVG.noodle_menu },
  { id: 1, name: "Meatball", slug: "/meatball", img: SVG.meatball_menu },
  { id: 2, name: "Fried Foods", slug: "/friedfood", img: SVG.friedFoods },
  { id: 3, name: "Drinks", slug: "/drink", img: SVG.drinks },
];

export * from "./SideBarItemLeft";
export * from "./SideBarItemRight";
