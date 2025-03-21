import React from "react";
import LinkBtn from "../../common/link-buttons/LinkBtn";
import TitleDesignLine from "../../common/TitleDesignLine";
import Image from "next/image";

interface Props {
  content: {
    title: string;
    desc: string;
    image: {
      src: string;
      alt: string;
    };
    link: {
      text: string;
      link: string;
      isExternal?: boolean;
    };
  };
  arabic?: boolean;
}

const DigitalDefense: React.FC<Props> = ({ content, arabic }) => {
  return (
    <div className="lg:py-[14.2361111111vw] pt-[128px] pb-[78px] relative overflow-hidden z-[2]">
      <div className="atlwh_Full  w-[100%] transform ">
        <span className=" gradientDigitalDefense  atlwh_Full noflipped pointer-events-none"></span>
        <img
          src="/images/about/digital-defense/pattern.png"
          alt="pattern"
          className="lg:size-[18.3333333333vw] size-[140px] absolute bottom-0 lrf2 flipped"
        />
      </div>
      <div className="myContainer flex justify-center lg:justify-between flex-wrap lg:gap-sp48 gap-[82px] relative z-[2]">
        <div className="lg:w-[38.6805555556vw] flex flex-col items-start text-white">
          <div>
            <h2
              data-aos="fade-up"
              dangerouslySetInnerHTML={{ __html: content.title }}
              className="text32"
            ></h2>
            <div className="lg:hidden lg:mt-0 mt-2">
              <TitleDesignLine gradientLine />
            </div>
          </div>

          <div
            data-aos="fade-down"
            dangerouslySetInnerHTML={{ __html: content.desc }}
            className="lg:text18 mtext22 lg:mt-sp30 mt-6"
          ></div>
          <div
            data-aos="fade"
            data-aos-delay="200"
            className="w-full flex justify-start lg:mt-sp48 mt-12"
          >
            <LinkBtn
              text={content?.link?.text}
              link={content?.link?.link}
              arabic={arabic}
            />
          </div>
        </div>
        <div
          data-aos="fade"
          data-aos-delay="400"
          className="relative lg:w-[33.8888888889vw] lg:h-sp190 w-[284px] h-[110px] lg:mt-sp20"
        >
          <Image fill alt={content.image.alt} src={content.image.src} />
        </div>
      </div>
    </div>
  );
};

export default DigitalDefense;
