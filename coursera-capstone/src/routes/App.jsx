// App.js
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Reservations from "../pages/Reservations";
import Orders from "../pages/Orders";
import Login from "../pages/Login";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Reservations" element={<Reservations />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Layout>
  );
};

export default App;
