import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Team from "./Team";
import Nav from "./Nav";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
