import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Detail from "./Page/Detail";
import HomePage from "./Page/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/:slug" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
