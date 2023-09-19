import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Notifications from "./Notifications";
import Noc from "./Noc";

const index = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="Notifications" subtitle="Notifications" />
      <Notifications />
      <Noc />
      <Footer />
    </>
  );
};

export default index;
