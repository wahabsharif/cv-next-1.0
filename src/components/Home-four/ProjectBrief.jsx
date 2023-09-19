import useGlobalContext from "../../hooks/useGlobalContext";
import VideoModal from "../common/VideoModal";

const VideoAreaFour = () => {
  const { show, handleShow, handleClose } = useGlobalContext();
  return (
    <>
      <div className="tpbs-video-area position-relative grey-bg">
        <div className="tpbsvideo-left text-center p-relative">
          <div
            className="tpbs-left-image"
            style={{
              backgroundImage: `url(assets/img/cv-project/Img-5.jpg)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}></div>
          <div className="tpbs-play-btn">
            <button
              onClick={handleShow}
              className="play-text popup-video animate-2">
              <i className="fa-solid fa-play"></i>
            </button>
          </div>
          <div
            className="tpbs-vnoise-bg"
            data-background="assets/img/testimonial/tpbs-vnoise-bg.png"></div>
          <div className="tpbs-shape">
            <img src="assets/img/video/video-shape-1.png" alt="" />
          </div>
        </div>
        <div className="tpbs-video-wrapper">
          <div className="container-fluid">
            <div className="row g-0 justify-content-end align-items-center">
              <div className="col-lg-6 ">
                <div className="tpbsvideo-box">
                  <div className="tpbsvideo-content">
                    <div className="tpbs-section-wrapper mb-40">
                      <h3 className="tpbs-title">
                        Project
                        <br /> <span> Brief.</span>
                      </h3>
                    </div>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Molestiae saepe officia commodi nemo reiciendis quibusdam
                      hic, recusandae deleniti fugiat nobis autem. Iste,
                      voluptate saepe! Cumque eum a amet natus asperiores?
                    </p>
                    {/* <div className="tpbs-video-button mt-50">
                      <Link href="/portfolio-details">
                        <a className="tpbs-btn-2">
                          More Details{" "}
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal show={show} handleClose={handleClose} videoId="CMLSrheE5rU" />
    </>
  );
};

export default VideoAreaFour;
