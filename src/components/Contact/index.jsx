import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import Footer from "../common/Footer";
import Header from "../common/Header";
import ContactArea from "./ContactArea";

const index = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="CONTACT US" subtitle="Contact Us" />
      <ContactArea />
      <Footer />
    </>
  );
};

export default index;
