import Link from "next/link";

const PortfolioDetailsArea = () => {
  return (
    <>
      <div className="project-details-area pt-140 pb-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6">
              <div className="aboutme-wrapper mb-40">
                <div className="aboutme-content">
                  <h3 className="tpabout-xd-title mb-50">
                    <b>General Block</b>
                  </h3>
                </div>
                <div className="aboutme-feature-list mt-25">
                  <ul>
                    <li>
                      <p>
                        Area:<a href="#"> ABCD</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        Cutting:<a href="#"> 123</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        Features:<a href="#"> xyz</a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="aboutme-image mb-40">
                <img
                  className="b-radius"
                  src="/assets/img/Img-2.jpg"
                  alt="project img"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="project-details-content">
                <h4 className="tab-pane-title mb-30">
                  <b>About</b>
                </h4>
                <p>
                  Capital Valley Islamabad has recently emerged as a promising
                  addition to Islamabad&apos;s real estate market. With the city
                  witnessing a surge in housing societies, the demand for
                  property is on the rise. This new housing project is
                  strategically located near Motorway M-2 and the Islamabad
                  International Airport, making it an attractive investment
                  opportunity, especially with its Airport Zero Km marketing
                  slogan, emphasizing its proximity to the airport. The
                  project&apos;s location in the vicinity of Top City-1 and
                  Airport Green Garden further enhances its investment
                  potential, offering the possibility of higher returns. For
                  those seeking to invest in a new housing society with
                  convenient installment plans, Capital Valley Islamabad
                  presents a compelling option.
                </p>
              </div>
              <div className="row mt-45">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="project-details-dimage w-img mb-45">
                    <img
                      className="b-radius"
                      src="/assets/img/Img-3.jpg"
                      alt="project img"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="project-details-dimage w-img mb-45">
                    <img
                      className="b-radius"
                      src="/assets/img/Img-3.jpg"
                      alt="project img"
                    />
                  </div>
                </div>
              </div>
              <ul>
                <li>5,7,10, 14 Marla & 1 Kanal plots.</li>
                <li>1 & 4 years easy instalment plan.</li>
                <li>
                  Located on M-2 Motorway and 0 KM from New Islamabad
                  International Airport.
                </li>
                <li>
                  Development work has been started in the Executive block.
                </li>
                <li>General Block Booking Closed.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsArea;
