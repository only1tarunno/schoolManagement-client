import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Singlecard from "./Singlecard";

const TestimonialCard = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Singlecard />
        </SwiperSlide>
        <SwiperSlide>
          <Singlecard />
        </SwiperSlide>
        <SwiperSlide>
          <Singlecard />
        </SwiperSlide>
        <SwiperSlide>
          <Singlecard />
        </SwiperSlide>
        <SwiperSlide>
          <Singlecard />
        </SwiperSlide>
        <SwiperSlide>
          <Singlecard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TestimonialCard;
