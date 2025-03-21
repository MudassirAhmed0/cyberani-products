import React from "react";
import Image from "next/image";
import TitleDesignLine from "@/components/common/TitleDesignLine";
import LinkBtn from "@/components/common/link-buttons/LinkBtn";
interface Props {
  arabic?: boolean;
}
const Challenges: React.FC<Props> = ({ arabic }) => {
  return (
    <div className="bg-white relative z-[2]">
      <div className="myContainer flex flex-wrap lg:gap-sp40 gap-[108px] lg:items-start justify-center lg:justify-between lg:py-sp150 py-[150px]">
        <div className="lg:w-[55.2083333333vw] flex flex-col items-start">
          <div>
            <h2 data-aos="fade-up" className="text-gray text36">
              <span className="lg:hidden">
                Stay Ahead <br /> of Tomorrow’s{" "}
                <span className="text-bright-teal">Challenges</span>
              </span>
              <span className="lg:block hidden">
                Stay Ahead of Tomorrow’s{" "}
                <span className="text-bright-teal">Challenges</span>
              </span>
            </h2>
            <TitleDesignLine gradientLine />
          </div>
          <p
            data-aos="fade-down"
            className="lg:text22 mtext22 text-black lg:mt-sp30 mt-8"
          >
            Try our next-generation cybersecurity services to protect and
            empower your business with robust security and seamless operations.
            Partner with us to safeguard your digital assets and drive
            innovation securely.
          </p>
          <div
            data-aos="fade"
            data-aos-delay="200"
            className="w-full flex justify-start lg:mt-sp48 mt-12"
          >
            <LinkBtn text={"Contact Us"} link={"/"} black arabic={arabic} />
          </div>
        </div>
        <div
          data-aos="fade"
          data-aos-delay="400"
          className="relative lg:w-[17.5vw] lg:h-[18.0555555556vw] w-[192px] h-[196px]"
        >
          <Image fill alt="pattern" src={"/gifs/pattern-home.gif"} />
        </div>
      </div>
    </div>
  );
};

export default Challenges;
