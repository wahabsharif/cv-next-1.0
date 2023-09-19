const AboutArea = () => {
  return (
    <>
      <div id="about-area" className="tpabout-area pt-140 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="tpabout-content-2 pb-50">
                <h3 className="tpabout-xd-title mb-15">
                  <b>Capital Valley</b> Islamabad
                </h3>
                <span className="tpabout-xs-title mb-40">
                  Capital of the Capital
                </span>
                <p className="tpab-text mb-30">
                  Capital Valley Islamabad stands out as an exceptional housing
                  society in the twin cities due to its strategic location,
                  ensuring easy accessibility from major points of the city.
                  While the project offers a plethora of facilities, it
                  recognizes the crucial importance of its convenient
                  positioning to provide a truly unmatched real estate
                  opportunity.
                </p>
                <p>
                  Capital Valley Islamabad enjoys an incredibly convenient
                  location, being situated zero kilometers away from the New
                  International Airport Islamabad. Moreover, it is just a short
                  drive from the main Kashmir Highway and Zero Point Islamabad.
                  This prime positioning places major landmarks within easy
                  reach, making it a highly accessible and desirable destination
                  for residents and investors alike.
                </p>
                {/* <div className="tpabout-btn mt-50">
                  <Link href="/contact">
                    <a className="tp-solid-btn">Get in touch</a>
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tpabout-image-2 pb-50">
                <img src="/assets/img/img-1-about.jpg" alt="about-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;
