import Slider1 from '../../assets/slider/slider-1.jpg';
import Slider2 from '../../assets/slider/slider-2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div className="lg:w-10/12 mx-auto px-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="max-h-100 w-full overflow-hidden">
            <img
              src={Slider1}
              alt="Event"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-80 w-full overflow-hidden">
            <img
              src={Slider2}
              alt="Event"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
