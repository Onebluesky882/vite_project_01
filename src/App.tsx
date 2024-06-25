import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/Components/Layout";
import HomePage from "@/Page/Homepage";
import PorkMenu from "@/Page/SidebarMenu/PorkMenu";
import BeefMenu from "@/Page/SidebarMenu/BeefMenu";
import SeafoodMenu from "@/Page/SidebarMenu/Seafood";
import VegetableMenu from "@/Page/SidebarMenu/Vegetable";
import NoodleMenu from "@/Page/SidebarMenu/NoodleMenu";
import MeatballMenu from "@/Page/SidebarMenu/Meatball";
import DrinkMenu from "@/Page/SidebarMenu/Drink";
import FriedFoodMenu from "@/Page/SidebarMenu/FriedFoodmenu";
import Promotion from "@/Page/FooterMenu/Promotion";
import Order from "@/Page/FooterMenu/Order";
import Waiter from "@/Page/FooterMenu/Waiter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/pork" element={<PorkMenu />} />
          <Route path="/beef" element={<BeefMenu />} />
          <Route path="/seafood" element={<SeafoodMenu />} />
          <Route path="/vegetable" element={<VegetableMenu />} />
          <Route path="/noodle" element={<NoodleMenu />} />
          <Route path="/meatball" element={<MeatballMenu />} />
          <Route path="/drink" element={<DrinkMenu />} />
          <Route path="/friedfood" element={<FriedFoodMenu />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/order" element={<Order />} />
          <Route path="/waiter" element={<Waiter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
