import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import Footer from "../common/Footer";
import Header from "../common/Header";
import BlogGridArea from "./BlogGridArea";

const index = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="Blog Grid" subtitle="Blog" />
      <BlogGridArea />
      <Footer />
    </>
  );
};

export default index;
