import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/Components/Layout";
import HomePage from "@/Page/Homepage";
import Waiter from "@/Page/Footer/Waiter";
import Promotion from "@/Page/Footer/Promotion";
import Cart from "./Page/Cart";
import Menu from "@/Page/Menu";
import NotFound from "./Components/Layout/notFound";
import TableNo from "./Page/Table/TableNo";
import Table from "@/Page/Table";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/tables" element={<Table />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/waiter" element={<Waiter />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:tableNo" element={<TableNo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
