export type MenuItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};

// คือการประกาศ type ตัวใหม่ ดึงของเก่า แล้วเพิ่ม object ใหม่เข้าไปเพิ่ม

export type MenuCartItem = MenuItem & { amount: number };
