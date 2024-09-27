import { menuList } from "@/Data/MenuCategory";
import { MenuGroup } from "@/types/MenuCategory";
import { useState } from "react";

const NewMenuBar = () => {
  const [categories, setCategories] = useState<MenuGroup[]>([]);

  // pass name to set
  const categoryMenu = (name: MenuGroup) => {
    const category = menuList.find((group) => group === name);

    // pork meet pork group than
  };
};
export default NewMenuBar;
