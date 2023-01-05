import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Error404 from "../Pages/Error404";
import NavBar from "../Navbar/NavBar";
import About from "../Pages/About";
import Banner from "../Banner/Banner";
import RowPost from "../RowPost/RowPost";

const PageRouter = () => {
  return (
    <>
      <NavBar/>
      <Banner/>
      <RowPost/>
      <Routes>
        <Route path="Home" element={<Home/>} />
        <Route index element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="About" element={<About />} />
      </Routes>
    </>
  );
};

export default PageRouter;
