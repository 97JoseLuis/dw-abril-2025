import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={15}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 3000,
      }}
      pagination={{ clickable: true }}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="https://www.dismoer.com/6539-home_default/revell-maqueta-coche-mclaren-570s-1-24.jpg" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://files.idyllic.app/files/static/2435232?width=256&optimizer=image" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.stockcake.com/public/a/b/1/ab13e6d6-1db0-41c5-8724-835ec2267b28_medium/elegant-blue-mercedes-stockcake.jpg" alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
