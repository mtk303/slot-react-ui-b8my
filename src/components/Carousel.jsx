import React from 'react'
import carouselone from '../assets/img/Carousel/carousel1.png'
import carouseltwo from '../assets/img/Carousel/carousel2.png'
import carouselthree from '../assets/img/Carousel/carousel3.png'
import carouselfour from '../assets/img/Carousel/carousel4.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {
    const banners=[carouselone,carouseltwo,carouselthree,carouselfour];
  return (
    <Swiper
    // spaceBetween={50}
    slidesPerView={1}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
  >
    {banners.map((banner,i)=>{
        return  <SwiperSlide key={i}>
            <img className='bannerImg w-100' src={banner} />
        </SwiperSlide>

    })}
    <marquee className='p-2 text-light bg-dark' >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quae saepe, alias ad maiores neque obcaecati ipsa adipisci eligendi, illo ut dicta, eaque quaerat ipsam ullam dolorum libero nulla amet.
      </marquee>
  </Swiper>
  )
}

export default Carousel
