"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay, FreeMode, Pagination } from "swiper/modules";
import css from "./Swiper.module.css";
import "swiper/css";
import "swiper/css/bundle";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className={css.container}>
      <Swiper
        modules={[Mousewheel, Autoplay, FreeMode, Pagination]}
        spaceBetween={10}
        slidesPerView="auto"
        className={css.list}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={7000}
        pagination={{
          el: ".customPagination",
        }}
      >
        <SwiperSlide>
          <Image
            className={css.rugsPics}
            src="/rug1.jpg"
            width={2000}
            height={2000}
            alt="rug"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={css.rugsPics}
            width={500}
            height={500}
            src="/rug6.jpg"
            alt="rug"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={css.rugsPics}
            width={2000}
            height={2000}
            src="/rug8.jpg"
            alt="rug"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={css.rugsPics}
            width={2000}
            height={2000}
            src="/rug4.jpg"
            alt="rug"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={css.rugsPics}
            src="/rug2.jpg"
            width={2000}
            height={2000}
            alt="rug"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={css.rugsPics}
            width={2000}
            height={2000}
            src="/rug9.jpg"
            alt="rug"
          ></Image>
        </SwiperSlide>
      </Swiper>
      <div className="customPagination"></div>
    </div>
  );
}
