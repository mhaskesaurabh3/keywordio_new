import { useState } from "react";
import { Routes, Route, Router } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import CreateAd from "./Pages/CreateAd/CreateAd";
import TextAd from "./Pages/TextAd/TextAd";
import MediaAd from "./Pages/MediaAd/MediaAd";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createad" element={<CreateAd />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/textad" element={<TextAd />} />
        <Route path="/mediaad" element={<MediaAd />} />
      </Routes>
    </>
  );
}

export default App;
