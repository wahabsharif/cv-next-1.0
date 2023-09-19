import Link from "next/link";

const PortfolioDetailsArea = () => {
  return (
    <>
      <div className="project-details-area pt-140 pb-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="aboutme-image mb-40">
                <img
                  className="b-radius"
                  src="/assets/img/Img-2.jpg"
                  alt="project img"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="aboutme-wrapper mb-40">
                <div className="aboutme-content">
                  <h3 className="tpabout-xd-title mb-50">
                    <b>Executive Block</b>
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
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="project-details-content">
                <h4 className="tab-pane-title mb-30">
                  <b>About</b>
                </h4>
                <p>
                  Capital Valley Islamabad is a recent addition to
                  Islamabad&apos;s real estate market. The city has experienced
                  a surge in real estate developments, with numerous housing
                  societies sprouting up in various areas, showcasing a
                  substantial demand for properties. Capital Valley Islamabad is
                  a prominent part of these new ventures, strategically situated
                  near Motorway M-2 and the new Islamabad International Airport.
                  Marketed as Airport Zero Km, the project emphasizes its close
                  proximity to the airport, making it an attractive investment
                  prospect. Offering an easy installment plan, it presents a
                  compelling investment opportunity for those seeking to invest
                  in a new housing society. Its advantageous location adjacent
                  to Top City-1 and Airport Green Garden further boosts its
                  investment potential, promising attractive returns in the
                  future.
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
                <li>
                  Booking for plots of 5, 7, 10 Marla, and 1 Kanal sizes has
                  commenced.
                </li>
                <li>1 & 4 years easy installment plan</li>
                <li>
                  Located on M-2 Motorway and 0 KM from New Islamabad
                  International Airport.
                </li>
                <li>
                  Development work has been started in the Executive block.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsArea;
