import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Blue from "./blue";
import Red from "./red";
import Home from "./home";

function App() {
 

  return (
    <>
    <div id="container">
      <div id="navbar">
        <Link to="/red">Red</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/">Home</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/red" element={<Red />}></Route>
          <Route path="/blue" element={<Blue />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes></div>
    </div>
    </>
  )
}

export default App
