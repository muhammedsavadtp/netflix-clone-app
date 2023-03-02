import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Error404 from "../Pages/Error404";
import NavBar from "../Navbar/NavBar";
import About from "../Pages/About";
import Banner from "../Banner/Banner";
import RowPost from "../RowPost/RowPost";
import { originals, action,comedy,romance,horror } from '../../Urls'

const PageRouter = () => {
  return (
    <>
      <NavBar/>
      <Banner/>
      <RowPost Url={originals} title='Netflix orginals'  />
      <RowPost Url={action} title='Action' isSmall  />
      <RowPost Url={comedy} title='Comedy' isSmall  />
      <RowPost Url={horror} title='Horror' isSmall  />
      <RowPost Url={romance} title='Romance' isSmall  />
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
