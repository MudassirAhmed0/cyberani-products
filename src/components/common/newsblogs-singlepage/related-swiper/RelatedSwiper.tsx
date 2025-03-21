"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import NewsBlogsCard from "../../news-blogs-card/NewsBlogsCard";
import Title from "./Title";

interface Props {
  content: { data: any; newsCard?: boolean; title: string };
  arabic: boolean;
}

const RelatedSwiper = ({
  content: { data, newsCard, title },
  arabic,
}: Props) => {
  const [swiperGap, setSwiperGap] = useState(0);
  useEffect(() => {
    setSwiperGap(
      window.innerWidth >= 1024 ? (window.innerWidth / 100) * 3.33333333333 : 20
    );
  });
  return (
    <section className="lg:mt-sp180 my-[84px] lg:mb-sp190">
      <Title title={title} />
      <Swiper
        className={`px-[5.12820512821vw] sm:px-[4.8vw] lg:px-[6.94444444444vw] lg:mt-sp40 mt-12 cursor-grab`}
        spaceBetween={swiperGap}
        slidesPerView={"auto"}
      >
        {data?.map((item: any, index: any) => (
          <SwiperSlide
            key={index}
            className={`${
              newsCard
                ? "lg:!w-[26.3194444444vw] !w-[93.429%] sm:!w-[55%]"
                : "lg:!w-[34.0277777778vw] !w-[93.429%] sm:!w-[55%]"
            } group select-none`}
          >
            {newsCard ? (
              <NewsBlogsCard item={item} formSwiper arabic={arabic} />
            ) : (
              ""
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RelatedSwiper;
