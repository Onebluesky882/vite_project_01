import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/Components/Layout";
import HomePage from "@/Page/Homepage";
import Waiter from "@/Page/Footer/Waiter";
import Promotion from "@/Page/Footer/Promotion";
import Cart from "./Page/Cart";
import BeefMenu from "./Page/SidebarMenu/BeefMenu";
import PorkMenu from "./Page/SidebarMenu/PorkMenu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/beef" element={<BeefMenu />} />
          <Route path="/pork" element={<PorkMenu />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/waiter" element={<Waiter />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
