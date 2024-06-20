import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import HomePage from "./Page/Homepage";
import PorkPage from "./Page/PorkPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/pork" element={<PorkPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
