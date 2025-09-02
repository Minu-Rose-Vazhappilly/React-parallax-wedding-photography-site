
import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { Routes, Route,Link } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";
import Home from "./Pages/Home";

// Initial images









export default function App() {




  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio/>} />
    </Routes>
      
    </>
  );
}
