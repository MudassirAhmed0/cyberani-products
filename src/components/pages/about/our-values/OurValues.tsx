import React from "react";
import Card from "./Card";

interface Props {
  content: {
    title: string;
    cards: {
      img: string;
      title: string;
      desc: string;
    }[];
  };
}
const OurValues = ({ content }: Props) => {
  return (
    <section className="lg:py-sp100 py-[100px] button_gradient relative z-[1]">
      <div className="atlwh_Full">
        <span className="atlwh_Full cta_home_overlay opacity-[0.6] z-[1]"></span>
        <span className="atlwh_Full bg-black opacity-[0.8]"></span>
        <div className="atlwh_Full z-[-1]">
          <video
            muted
            loop
            autoPlay
            playsInline
            className="atlwh_Full object-cover fixed top-0 left-0 ctaVideo"
            src="/videos/cta_home.mp4"
            preload="auto"
          ></video>
        </div>
      </div>
      <div className="relative z-[2] text-white myContainer">
        <h2
          data-aos="fade-up"
          dangerouslySetInnerHTML={{ __html: content?.title }}
          className="lg:text36 text-center text-[36px] leading-[54px] font-medium"
        ></h2>
        <div className="flex lg:gap-sp48 gap-12 justify-between flex-wrap items-center lg:items-stretch lg:mt-sp100 mt-[100px]">
          {content?.cards?.map((card, index) => (
            <Card data={card} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
