import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HeroSection from "./HeroSection";
import CeoMessage from "./CeoMessage";
import ProjectBrief from "./ProjectBrief";
import MasterPlan from "./MasterPlan";
import ExecutiveBlock from "./ExecutiveBlock";
import GeneralBlock from "./GeneralBlock";
import BrandArea from "../common/BrandArea";
import Amenities from "./Amenities";
// import BlogFour from "./BlogFour";
// import CtaFour from "./CtaFour";
// import PortfolioFour from "./PortfolioFour";
// import ServicesFour from "./ServicesFour";
// import TestimonialFour from "./TestimonialFour";

const HomeFourMain = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <CeoMessage />
      <ProjectBrief />
      <MasterPlan />
      <ExecutiveBlock />
      <GeneralBlock />
      <BrandArea hideTopBar={true} />
      <Amenities />
      {/* <CtaFour /> */}
      {/* <ServicesFour /> */}
      {/* <PortfolioFour /> */}
      {/* <TestimonialFour />
      <BlogFour /> */}
      <Footer />
    </>
  );
};

export default HomeFourMain;
