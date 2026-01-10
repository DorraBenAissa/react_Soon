import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// images
import thumb_3 from "../assets/img/portfolio/details/thumb-3.jpg";
import thumb_4 from "../assets/img/portfolio/details/thumb-4.jpg";

export default function PortfolioIdentitySection() {
  return (
    <div className="row justify-content-center">
      {/* SLIDER */}
      <div className="col-lg-11">
        <div className="td-portfolio-identity-slider-wrap">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            speed={700}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".td-portfolio-identity-next",
              prevEl: ".td-portfolio-identity-prev",
            }}
            breakpoints={{
              1400: { slidesPerView: 2 },
              1200: { slidesPerView: 2 },
              991: { slidesPerView: 2 },
              768: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
            className="td-portfolio-identity-slider"
          >
            <SwiperSlide>
              <div className="td-portfolio-identity-slider-thumb">
                <img className="w-100" src={thumb_3} alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="td-portfolio-identity-slider-thumb">
                <img className="w-100" src={thumb_4} alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="td-portfolio-identity-slider-thumb">
                <img className="w-100" src={thumb_3} alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="td-portfolio-identity-slider-thumb">
                <img className="w-100" src={thumb_4} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="col-lg-4">
        <div className="td-portfolio-identity-navigation d-flex justify-content-between pt-80 align-items-center">
          <span className="td-portfolio-identity-prev">
            <i className="fa-solid fa-arrow-left"></i>
            Prev
          </span>

          <div className="td-portfolio-identity-border"></div>

          <span className="td-portfolio-identity-next">
            Next
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
