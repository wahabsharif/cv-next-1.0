import { motion } from "framer-motion";
const AboutFour = () => {
  return (
    <>
      <div className="tpbs-about-area pt-50 pb-50 p-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-5">
              <div className="tpbs-about-image s-about-img-2">
                <div className="s-about-img-2-inner p-relative fix">
                  <img src="/assets/img/sohail-cheema.jpg" alt="about-img" />
                  <img className="about-shape-1" src="" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="tps-about tps-about-wrap">
                <div className="tpbs-section-wrapper mb-30">
                  <h3 className="tpbs-title">
                    CEO
                    <br /> <span>Message.</span>
                  </h3>
                </div>
                <p className="ab-text mb-30">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Inventore, placeat fugit! Beatae odio officiis sunt officia
                  obcaecati nulla a reprehenderit assumenda corrupti illum
                  temporibus ratione non eveniet ad, magni facere.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tpbs-ab-shape fix">
          <img src="assets/img/about/ab-shape.png" alt="shape" />
        </div>
        <div className="tpbs__shape tpbs__shape-2">
          <img src="/assets/img/golden-left-1.png" alt="shape-1" />
        </div>
        <div className="tpbs__shape tpbs__shape-3">
          <img src="/assets/img/golden-right.png" alt="shape-1" />
        </div>
      </div>
    </>
  );
};

export default AboutFour;
