"use client";
import Lottie from "lottie-react";
import Image from "next/image";
import React from "react";
import logoAnimation from "../../../../public/jsons/JSON-03 Logo Cyberani.json";

interface Props {
  content: {
    title: string;
    desc: string;
    image: {
      src: string;
      alt: string;
    };
  };
}

const Pioneering = ({ content }: Props) => {
  return (
    <section className="relative bg-dull-white lg:pt-sp180 pt-[120px] lg:pb-[8vw] z-[3]">
      <img
        src="/images/about/pioneering/pattern.png"
        alt="pattern"
        className="lg:size-[18.3333333333vw] size-[140px] absolute top-0 lrf1 flipped"
      />
      <div className="myContainer relative z-[2] lg:mb-[-2.5vw] -mb-6 flex items-start justify-between flex-wrap lg:gap-sp60 gap-12">
        <div className="lg:w-[48.8194444444vw] text-black">
          <h2
            data-aos="fade-up"
            dangerouslySetInnerHTML={{ __html: content.title }}
            className="text32"
          ></h2>
          <div
            data-aos="fade-down"
            dangerouslySetInnerHTML={{ __html: content.desc }}
            className="lg:text18 lg:leading-[1.73611111111vw] mtext18 flex flex-col lg:gap-y-sp18 gap-y-5 lg:mt-sp32 mt-10"
          ></div>
        </div>
        <div className="relative lg:w-[32.4305555556vw]  w-full h-[390px] lg:h-[unset]">
          <div
            data-aos="fade"
            data-aos-delay="200"
            className=" absolute lg:w-[32.4305555556vw] lg:h-[39.4444444444vw] w-full h-[425px] lg:border20 border15 overflow-hidden"
          >
            <Image fill alt={content.image.alt} src={content.image.src} />
            <div
              style={{
                transform: " matrix(0.866025, -0.5, 0, 1, 0.90625, 41.9824)",
              }}
              className="absolute size-[18vw] top-[20.5vw] left-[37.5vw] lg:size-[5.77083333333vw] lg:left-[14.0972222222vw] lg:top-[9vw] top-[76px]"
            >
              <Lottie
                animationData={logoAnimation}
                loop
                autoplay
                className="flipped mix-blend-plus-lighter   size-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pioneering;
