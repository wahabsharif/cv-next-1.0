/* eslint-disable @next/next/no-img-element */
import { Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSliderFour = () => {
  const sliderData = [
    {
      id: 1,
      bg: "/assets/img/Img-1.jpg",
      subtitle: (
        <>
          0 KM{" "}
          <span>
            <br />
            From Airport
          </span>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="tpbs-area p-relative">
        <div className="tpbs-slider tpbs-slider-active">
          <Swiper
            modules={[Pagination, EffectFade]}
            spaceBetween={25}
            slidesPerView={1}
            effect="fade"
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}>
            {sliderData.slice(0, 6).map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div
                    className="tpbs-slider__item tpbs-slider__height text-center"
                    style={{
                      backgroundImage: `url(${item.bg})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                    height={"80px"}>
                    <div className="tpbs-slider__item-content p-relative">
                      <div className="container">
                        <div className="row">
                          <div className="col-xl-12">
                            <h3 className="tpbs-slider__item-title">
                              {item.subtitle}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* <div className="tpbs__shape tpbs__shape-1">
          <img src="assets/img/shape/shape-1.png" alt="shape-1" />
        </div> */}
        <div className="tpbs__shape tpbs__shape-2">
          <img src="/assets/img/gold-leaf-shape-2.webp" alt="shape-1" />
        </div>
        <div className="tpbs__shape tpbs__shape-3">
          <img src="/assets/img/gold-leaf-shape-3.jpg" alt="shape-1" />
        </div>
      </div>
    </>
  );
};

export default HeroSliderFour;
