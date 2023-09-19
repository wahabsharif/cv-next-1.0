import Link from "next/link";
import useGlobalContext from "../../hooks/useGlobalContext";
import { useState } from "react";
import Lightbox from "react-image-lightbox";

const Sidebar = ({ headerMenu }) => {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const galleryImages = [
    {
      id: 1,
      img: "/assets/img/project/sm/project-7.jpg",
    },
    {
      id: 2,
      img: "/assets/img/project/sm/project-8.jpg",
    },
    {
      id: 3,
      img: "/assets/img/project/sm/project-9.jpg",
    },
    {
      id: 4,
      img: "/assets/img/project/sm/project-10.jpg",
    },
    {
      id: 5,
      img: "/assets/img/project/sm/project-13.jpg",
    },
    {
      id: 6,
      img: "/assets/img/project/sm/project-12.jpg",
    },
  ];
  const lightBoxImages = galleryImages.map((img) => img.img);
  const images = lightBoxImages;

  return <>
    {open && (
      <Lightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % images.length]}
        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        onCloseRequest={() => setOpen(false)}
        onMovePrevRequest={() =>
          setPhotoIndex((photoIndex + images.length - 1) % images.length)
        }
        onMoveNextRequest={() =>
          setPhotoIndex((photoIndex + 1) % images.length)
        }
      />
    )}

    {/* <!-- sidebar area start --> */}
    <div className={`sidebar__area ${showSidebar ? "sidebar-opened" : ""}`}>
      <div className="sidebar__wrapper">
        <div className="sidebar__close" onClick={() => setShowSidebar(false)}>
          <button className="sidebar__close-btn" id="sidebar__close-btn">
            <i className="fal fa-times"></i>
          </button>
        </div>
        <div className="sidebar__content">
          <div className="sidebar__logo mb-40">
            <a href="index.html">
              <img
                src="/assets/img/logo/cv-color-logo-white.png"
                width={"100px"}
                alt="logo"
              />
            </a>
          </div>
          <div className="mobile-menu fix">
            <nav
              id="mobile-menu"
              className={`${headerMenu ? "d-block" : "d-lg-none"}`}>
              <ul>
                <div className="single_link iconAdd">
                  <li>
                    <Link href="/">
                      Home
                    </Link>
                  </li>
                </div>
                <div className="single_link iconAdd">
                  <li>
                    <Link href="/about">
                      About
                    </Link>
                  </li>
                </div>
                <div className="single_link iconAdd">
                  <li>
                    <Link href="/">
                      Notifications
                    </Link>
                  </li>
                </div>
                <div className="single_link iconAdd">
                  <li>
                    <Link href="/">
                      Members Portal
                    </Link>
                  </li>
                </div>
                <div className="single_link iconAdd">
                  <li>
                    <Link href="/blog-grid">
                      Blogs
                    </Link>
                  </li>
                </div>

                <div className="single_link iconAdd border-0">
                  <li>
                    <Link href="/contact">
                      Contact
                    </Link>
                  </li>
                </div>
              </ul>
            </nav>
          </div>
          <div
            className={`sidebar__map ${
              headerMenu ? "d-none" : "d-none d-lg-block"
            } mb-15`}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.2944154242978!2d73.08507537414079!3d33.727202234826215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf0d0335eea5%3A0x28e55a533afbe8d5!2sCapital%20Valley%20Office!5e0!3m2!1sen!2s!4v1692345302985!5m2!1sen!2s"></iframe>
          </div>
          <div className="sidebar__contact mt-30 mb-20">
            <h4>Contact Info</h4>
            <ul>
              <li className="d-flex align-items-center">
                <div className="sidebar__contact-icon mr-15">
                  <i className="fal fa-map-marker-alt"></i>
                </div>
                <div className="sidebar__contact-text">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.google.com/maps/place/Capital+Valley+Office,+Ali+plaza,+Jinnah+Ave,+Block+R+F+6%2F4+Blue+Area,+Islamabad,+Islamabad+Capital+Territory,+Pakistan/@33.7271978,73.0876503,17z/data=!4m6!3m5!1s0x38dfbf0d0335eea5:0x28e55a533afbe8d5!8m2!3d33.7271978!4d73.0876503!16s%2Fg%2F11twfj6_d6">
                    3rd Floor, Ali Plaza, Jinnah Avenue, Blue Area, Islamabad.
                  </a>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="sidebar__contact-icon mr-15">
                  <i className="far fa-phone"></i>
                </div>
                <div className="sidebar__contact-text">
                  <a href="tel:+923111177716">+92 311 1177 716</a>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="sidebar__contact-icon mr-15">
                  <i className="fal fa-envelope"></i>
                </div>
                <div className="sidebar__contact-text">
                  <a href="/cdn-cgi/l/email-protection#added8ddddc2dfd9edcac0ccc4c183cec2c0">
                    <span
                      className="mailto:info@capitalvalley.pk"
                      data-cfemail="0b787e7b7b64797f4b666a626725686466">
                      info@capitalvalley.pk
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="sidebar__social">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/capitalvalleyofficial"
                  target="_blank"
                  rel="noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/capitalvalleyofficial/"
                  target="_blank"
                  rel="noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@capitalvalleyofficial"
                  target="_blank"
                  rel="noreferrer">
                  <i className="fab fa-tiktok"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/_capitalvalley"
                  target="_blank"
                  rel="noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@capitalvalleyofficial"
                  target="_blank"
                  rel="noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/capital-valley-official/"
                  target="_blank"
                  rel="noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div
      onClick={() => setShowSidebar(false)}
      className={`${
        showSidebar ? "body-overlay opened" : "body-overlay"
      }`}></div>
    {/* <!-- sidebar area end -->  */}
  </>;
};

export default Sidebar;
