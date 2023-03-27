import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Footer from "../components/Footer/Footer";
// import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import About from "../screen/About/About";
import Layout from "../Layout/Layout";
import NoPath from "../screen/NoPath/NoPath"
// import Projects from './Projects';
// import resume from './Resume';

const AppRoute = () => {
  return (
    <BrowserRouter basename="/SABRASPORTFOLIO">

    <Router>
      <div className="approutes">
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPath />} />
        </Route>
        </Routes>
      </div>
    </Router>
    </BrowserRouter>
  );
};

export default AppRoute;
