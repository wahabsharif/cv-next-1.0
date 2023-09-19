import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import Footer from "../common/Footer";
import Header from "../common/Header";
import BallotResults from "./ballot-result";
// import BallotResults from "./BallotResults"; // Correct component name?

const Index = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="Members Portal" subtitle="Members Portal" />
      <BallotResults />
      <Footer />
    </>
  );
};

export default Index;
