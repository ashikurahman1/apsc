import Slider1 from '../../../assets/slider/slider-1.jpg';
import Slider2 from '../../../assets/slider/slider-2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Autoplay } from 'swiper/modules';

const Banner = () => {
  return (
    <div className="lg:w-10/12 mx-auto px-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-52 lg:h-120 w-full overflow-hidden">
            <img
              src={Slider1}
              alt="Event"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-52 lg:h-120 w-full overflow-hidden">
            <img
              src={Slider2}
              alt="Event"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <div>
        <div className="grid grid-cols-2 xl:grid-cols-4">
          <div className="bg-primary hover:opacity-80 transition text-center p-3 lg:p-5 font-semibold text-neutral-100">
            <h4 className=" lg:text-xl">EIIN</h4>
            <h2 className="text-xl lg:text-2xl">129421</h2>
          </div>
          <div className="bg-red-500 hover:opacity-80 transition text-center p-3 lg:p-5 font-semibold text-neutral-100">
            <h4 className=" lg:text-xl">Institution Code</h4>
            <h2 className="text-xl lg:text-2xl">1205071301</h2>
          </div>
          <div className="bg-primary hover:opacity-80 transition text-center p-3 lg:p-5 font-semibold text-neutral-100">
            <h4 className=" lg:text-xl">Center Code</h4>
            <h2 className="text-xl lg:text-2xl">301</h2>
          </div>
          <div className="bg-red-500 hover:opacity-80 transition text-center p-3 lg:p-5 font-semibold text-neutral-100">
            <h4 className=" lg:text-xl">Estd Year</h4>
            <h2 className="text-xl lg:text-2xl">1998</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
