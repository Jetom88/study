import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Comp from "./components/Comp";

import Home from "./components/Home";
import Login from "./components/Login";
import Navigate from "./components/Navigate";
import Register from "./components/Register";
import Header from "./ikea/components/Header";
import IkeaClone from "./ikea/components/IkeaClone";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navigate />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/comp" element={<Comp />} />
        <Route path="/register" element={<Register />} />

        <Route element={<Header />}>
          <Route path="/ikea" element={<IkeaClone />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
