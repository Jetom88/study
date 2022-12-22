import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Comp from "./components/Comp";
import List from "./components/List";

import Home from "./components/Home";
import Login from "./components/Login";
import Navigate from "./components/Navigate";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navigate />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/comp" element={<Comp />} />
        <Route path="/list" element={<List />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
