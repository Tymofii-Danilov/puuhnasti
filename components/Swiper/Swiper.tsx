"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay, FreeMode, Pagination } from "swiper/modules";
import css from "./Swiper.module.css";
import "swiper/css";
import "swiper/css/bundle";
import Image from "next/image";
import { products } from "@/data/data";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Gallery() {
  const [id, setId] = useState("");
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setId(event.currentTarget.children[0].id);
  };
  useEffect(() => {
    router.push(`/${id}`);
  }, [id, router]);
  return (
    <div className={css.wrapper}>
      <Swiper
        modules={[Mousewheel, Autoplay, FreeMode, Pagination]}
        spaceBetween={10}
        slidesPerView="auto"
        className={css.list}
        mousewheel={true}
        grabCursor={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1000}
        pagination={{
          el: ".customPagination",
          clickable: true,
        }}
      >
        {products.map((product) => (
          <SwiperSlide
            onClick={handleClick}
            key={product.id}
            className={css.wrap}
          >
            <Image
              className={css.rugsPics}
              src={product.src}
              width={2000}
              height={2000}
              alt={product.description}
              id={String(product.id)}
            />
            <div className={css.overlay}>
              <div className={css.cardInfo}>
                <p className={css.price}>${product.price}</p>
                <Link href={`/${id}`} className={css.order}>
                  Order
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="customPagination"></div>
    </div>
  );
}
