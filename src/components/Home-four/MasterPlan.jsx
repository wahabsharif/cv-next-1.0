import useGlobalContext from "../../hooks/useGlobalContext";
import VideoModal from "../common/VideoModal";

const VideoArea = () => {
  const { show, handleShow, handleClose } = useGlobalContext();
  return (
    <>
      <section className="tpvideo-area p-relative">
        <div className="tpvideo">
          <img src="assets/img/video/video-3.jpg" alt="video-img" />
          <div className="tpvideo__content">
            <div className="video-button">
              <button
                onClick={handleShow}
                href="https://www.youtube.com/watch?v=o4GuSJYSzrY"
                className="popup-video">
                <i className="fa-solid fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="text-center">
            <div className="tpbs-section-wrapper mb-30">
              <h3 className="tpbs-title">Master Plan</h3>
            </div>
            <p>
              Capital Valley Islamabad, undertaken by the renowned Capital
              Valley company, has a successful track record of completing
              numerous construction and development projects. The town planning
              responsibilities for Capital Valley Islamabad are carried out by
              Urban Solutions Pvt Ltd, a highly esteemed name in the
              country&apos;s real estate market. The company has been entrusted
              with development consultancy by prestigious organizations such as
              DHA, CBR, The Grand City Kharian, and Fazaia Housing Scheme. In
              addition, Green Thumb is actively involved in creating landscape
              maps for the society, ensuring that the housing area stands out by
              providing more green spaces than any other housing society in the
              region.
            </p>
          </div>
        </div>
      </section>

      <VideoModal show={show} handleClose={handleClose} videoId="o4GuSJYSzrY" />
    </>
  );
};

export default VideoArea;
