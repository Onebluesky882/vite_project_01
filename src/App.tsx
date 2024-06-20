import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Detail from "./Page/Seafood";
import HomePage from "./Page/Homepage";
import Desert from "./Page/PorkPage";
import Drinks from "./Page/Drink";
import PorkPage from "./Page/PorkPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/pork" element={<PorkPage />} />
          <Route path="/desert" element={<Desert />} />
          <Route path="/drink" element={<Drinks />} />
          <Route path="/detail" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
