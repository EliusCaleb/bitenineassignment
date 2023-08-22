import React from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";

function App() {
  return (
    <div className="">
      <TopBar style={{ display: "block" }}  />
      <Navbar />
      <Routes>
        <Route path="/home" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
