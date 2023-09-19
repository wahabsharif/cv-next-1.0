import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const BrandArea = ({
  hideTopBar = false,
  homeFiveBrand,
  brand,
  about,
  padd,
}) => {
  const brandData = [
    {
      id: 1,
      img: "/assets/img/authorized-partner/4AS_Marketing.png",
    },
    {
      id: 2,
      img: "/assets/img/authorized-partner/Aeon_Marketing.png",
    },
    {
      id: 3,
      img: "/assets/img/authorized-partner/Al-Gahni_Marketing.png",
    },
    {
      id: 4,
      img: "/assets/img/authorized-partner/Arif Associates Logo 01 PNG.png",
    },
    {
      id: 5,
      img: "/assets/img/authorized-partner/Axiple_Marketing.png",
    },
    {
      id: 6,
      img: "/assets/img/authorized-partner/Billionaire_Investment_Group.png",
    },
    {
      id: 7,
      img: "/assets/img/authorized-partner/Click_Group.png",
    },
    {
      id: 8,
      img: "/assets/img/authorized-partner/elaf-group.jpeg",
    },
    {
      id: 9,
      img: "/assets/img/authorized-partner/Ethiad_Enterprises.png",
    },
    {
      id: 10,
      img: "/assets/img/authorized-partner/Farhan_Enterprises.png",
    },
    {
      id: 11,
      img: "/assets/img/authorized-partner/Generous_Marketing.png",
    },
    {
      id: 12,
      img: "/assets/img/authorized-partner/investors-world.png",
    },
    {
      id: 13,
      img: "/assets/img/authorized-partner/land-route.png",
    },
    {
      id: 14,
      img: "/assets/img/authorized-partner/MCR_Master.png",
    },
    {
      id: 15,
      img: "/assets/img/authorized-partner/next-generation-property.png",
    },
    {
      id: 16,
      img: "/assets/img/authorized-partner/paces.png",
    },
    {
      id: 17,
      img: "/assets/img/authorized-partner/Scope_Marketing.png",
    },
    {
      id: 18,
      img: "/assets/img/authorized-partner/Shah_Estate.png",
    },
    {
      id: 19,
      img: "/assets/img/authorized-partner/Stateman_Properties.png",
    },
  ];
  return (
    <>
      <section
        id="brand"
        className={`tpbrand-area${brand ? brand : ""} 
    ${
      hideTopBar ? "pt-135 pb-115" : `pt-115 pb-40 ${homeFiveBrand && "pb-120"}`
    } ${about && about} ${padd && padd}`}
        style={{ background: "white" }}>
        <div className="container">
          <div className="text-center">
            <h3 className="mb-50">
              <b>Authorized Partners</b>
            </h3>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tpbrand__slider-active">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={15}
                  slidesPerView={1}
                  autoplay={{ delay: 2000 }}
                  loop={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    550: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 4,
                    },
                    1400: {
                      slidesPerView: 5,
                    },
                  }}>
                  {brandData.map((item) => {
                    return (
                      <SwiperSlide key={item.id}>
                        <div className="tpbrand__slider-item">
                          <a href="#">
                            <img src={item.img} height={"150px"} alt="brand" />
                          </a>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandArea;
