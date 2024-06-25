import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import HomePage from "@/Page/Homepage";
import PorkMenu from "./Page/PorkMenu";
import BeefMenu from "./Page/BeefMenu";
import SeafoodMenu from "./Page/Seafood";
import VegetableMenu from "./Page/Vegetable";
import NoodleMenu from "./Page/NoodleMenu";
import MeatballMenu from "./Page/Meatball";
import DrinkMenu from "@/Page/Drink";
import FriedFoodMenu from "@/Page/FriedFoodmenu";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
