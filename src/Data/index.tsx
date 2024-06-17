import basil from "/src/assets/basil.jpeg";
import friedChiliSweet from "/src/assets/fried_chili_sweet.webp";
import friedMeatGarlic from "/src/assets/fried_meat_garlic.jpeg";
import friedPorkChiliPaste from "/src/assets/fried_pork_chili_paste.png";
import friedGreenCurry from "/src/assets/fried_green_curry.jpeg";
import friedRice from "/src/assets/fried_rice.jpeg";

export const Menus = [
  {
    id: 0,
    name: "ข้าวผัด",
    meat: ["หมู", "ไก่", "กุ้ง"],
    price: [30, 40, 50],
    image: friedRice,
    slug: "ข้าวผัด",
  },
  {
    id: 1,
    name: "กระเพรา",
    meat: ["หมู", "ไก่", "กุ้ง"],
    price: [30, 40, 50],
    image: basil,
    slug: "กระเพรา",
  },
  {
    id: 2,
    name: "ข้าวผัดพริกสด",
    meat: ["หมู", "ไก่", "กุ้ง"],
    price: [30, 40, 50],
    image: friedChiliSweet,
    slug: "ข้าวผัดพริกสด",
  },

  {
    id: 3,
    name: "ข้าวผัดเนื้อกระเทียม",
    meat: ["หมู", "ไก่", "กุ้ง"],
    price: [30, 40, 50],
    image: friedMeatGarlic,
    slug: "ข้าวผัดเนื้อกระเทียม",
  },
  {
    id: 4,
    name: "ข้าวผัดพริกเผา",
    meat: ["หมู", "ไก่", "กุ้ง"],
    price: [30, 40, 50],
    image: friedPorkChiliPaste,
    slug: "ข้าวผัดพริกเผา",
  },
  {
    id: 5,
    name: "แขงเขียวหวาน",
    meat: ["หมู", "ไก่", "ทะเล"],
    price: [50, 60, 70],
    image: friedGreenCurry,
    slug: "แขงเขียวหวาน",
  },
];
