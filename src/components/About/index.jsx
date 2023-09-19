import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import Footer from "../common/Footer";
import Header from "../common/Header";
import AboutArea from "./AboutArea";
import ProjectDevelopers from "./ProjectDevelopers";

const index = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="ABOUT" subtitle=" About Us" />
      <AboutArea />
      <ProjectDevelopers />
      <Footer />
    </>
  );
};

export default index;
