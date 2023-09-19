import React, { useState } from "react";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import portfolioData from "../../../data/portfolioData";
import SinglePortfolio from "./SinglePortfolio";

const portfolioItems = portfolioData.slice(0, 4);
const uniquePortfolioItems = portfolioItems.filter(
  (arr, index, self) =>
    index === self.findIndex((t) => t.img === arr.img && t.State === arr.State)
);

const PortfolioOne = () => {
  const [portfolios, setPortfolios] = useState(uniquePortfolioItems);
  const [active, setIsActive] = useState("all");
  // handleFilterItems
  const handleFilterItems = (category) => {
    setIsActive(category);
    if (category === "all") {
      setPortfolios(uniquePortfolioItems);
    } else {
      const filterItems = portfolioItems.filter(
        (item) => item.category === category
      );
      setPortfolios(filterItems);
    }
  };
  return (
    <>
      <div className="tp-creative-lists-area tp-creative-padding pt-140 pb-140">
        <div className="container-fluid">
          <div className="">
            <h3 className="tpabout-xd-title text-center my-5">
              <b>Notifications</b>
            </h3>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 0: 1, 750: 2, 900: 3 }}>
              <Masonry gutter="25px">
                {portfolios.map((item, index) => {
                  return (
                    <SinglePortfolio
                      key={item.id}
                      item={item}
                      index={index}
                      portfolios={portfolios}
                    />
                  );
                })}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
      <div className="tp-creative-lists-area tp-creative-padding pt-140 pb-140">
        <div className="container-fluid">
          <div className="">
            <h3 className="tpabout-xd-title text-center my-5">
              <b>NOC</b>
            </h3>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 0: 1, 750: 2, 900: 3 }}>
              <Masonry gutter="25px">
                {portfolios.map((item, index) => {
                  return (
                    <SinglePortfolio
                      key={item.id}
                      item={item}
                      index={index}
                      portfolios={portfolios}
                    />
                  );
                })}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioOne;
