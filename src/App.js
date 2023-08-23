import React from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="">
      <TopBar style={{ display: "block" }} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Product />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
