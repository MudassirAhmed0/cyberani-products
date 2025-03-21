import React from "react";
import Image from "next/image";
import TitleDesignLine from "@/components/common/TitleDesignLine";
import LinkBtn from "@/components/common/link-buttons/LinkBtn";
interface Props {
  arabic?: boolean;
}
const WhatsNext: React.FC<Props> = ({ arabic }) => {
  return (
    <div className="bg-white relative z-[2]">
      <div className="myContainer relative flex flex-wrap lg:gap-sp72 gap-8 lg:items-center justify-center lg:justify-between lg:py-[14.2361111111vw] pt-[150px] pb-[220px]">
        <div
          data-aos="fade"
          className="relative lg:w-[29.8611111111vw] lg:h-[31.25vw] w-full h-[426px] border15 overflow-hidden"
        >
          <Image
            fill
            alt="banner"
            className="object-cover"
            src={"/images/home/whatsnext/banner.jpg"}
          />
        </div>
        <div className="lg:w-[50.9722222222vw] flex flex-col items-start">
          <div>
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-gray text36 lg:pb-0 pb-2"
            >
              Be A Part Of What’s <span className="text-bright-teal">Next</span>
            </h2>
            <TitleDesignLine gradientLine />
          </div>
          <p
            data-aos="fade-down"
            data-aos-delay="200"
            className="text22 text-black lg:mt-sp30 mt-6 lg:max-w-[95%]"
          >
            Join us and make your career objectives turns to reality with
            talented team and a big family that empower your skills and
            performance.
          </p>
          <div
            data-aos="fade"
            data-aos-delay="400"
            className="w-full flex justify-start lg:mt-sp48 mt-12"
          >
            <LinkBtn
              text={"Apply for a Job"}
              link={(arabic ? "/ar" : "") + "/careers"}
              black
              notCapitalize
              arabic={arabic}
            />
          </div>
        </div>
        <img
          src="/images/home/whatsnext/next-pattern.png"
          alt="pattern"
          className="absolute bottom-0 lg:lrf2 lg:w-[17.9166666667vw] w-[258px]"
        />
      </div>
    </div>
  );
};

export default WhatsNext;
