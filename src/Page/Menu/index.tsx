import { CartOrderCard } from "@/Components/CartOrderCard";
import { MenuCard } from "@/Components/menuCard/MenuCard";
import { SidebarLeft, SidebarRight } from "@/Components/Sidebar";
import { menu as menuCategory } from "@/Data/Menu";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Menu = () => {
  const { table } = useContext(GlobalContext).tableProvider;
  const { orders } = useContext(GlobalContext).cartProvider;
  const { tableNo: paramTableNo } = useParams();
  const [category, setCategory] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [displayTableNo, setDisplayTableNo] = useState<string>(
    paramTableNo || ""
  );

  const handleSubmit = (cat: string) => {
    setCategory(cat);
  };

  const menuFilter = menuCategory.filter(
    (item) => item.category === category.toLocaleLowerCase()
  );

  useEffect(() => {
    if (table.tableNo) {
      setDisplayTableNo(table.tableNo);
    }
  }, [table.tableNo]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Table : {displayTableNo ? <h3>{displayTableNo}</h3> : <p>...</p>}
      </h1>
      <h2 style={{ textAlign: "center" }}>
        รายการอาหาร
        {orders.map((i) => (
          <CartOrderCard order={i} />
        ))}
      </h2>
      <SidebarLeft submit={handleSubmit} />
      <SidebarRight submit={handleSubmit} />
      <div className="ProductCardContainer">
        {menuFilter.map((menu) => (
          <MenuCard
            key={menu.id}
            image={menu.image}
            name={menu.name}
            price={menu.price}
            id={menu.id}
            category={menu.category}
          />
        ))}
      </div>
    </>
  );
};

export default Menu;
