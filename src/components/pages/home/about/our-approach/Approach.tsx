"use client";
import TitleDesignLine from "@/components/common/TitleDesignLine";
import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";
interface ApproachProps {
  json: Record<string, any>;
  heading: string;
  desc: string;
  translate?: string;
}

const Approach: React.FC<ApproachProps> = ({
  json,
  heading,
  desc,
  translate = "",
}) => {
  return (
    <div data-aos="fade-up">
      <div
        className={`${translate} lg:w-[28.1944444444vw] last:lg:w-[24vw] flex flex-col items-center lg:items-start text-center lg:text-start`}
      >
        <div className="relative lg:size-sp80 size-[80px]">
          <Lottie
            animationData={json}
            loop
            autoplay
            className="flipped  transform scale-[1.3]"
          />
        </div>
        <div className="relative lg:mt-sp60 lg:mb-sp20 my-12">
          <div
            dangerouslySetInnerHTML={{ __html: heading }}
            className="lg:text28 mtext28 approach_title pb-[32px] lg:pb-[unset] w-[78%] mx-auto lg:mx-[unset]"
          ></div>

          <div className="lg:w-[78%] w-full">
            <TitleDesignLine />
          </div>
        </div>
        <p className="lg:text22 mtext22">{desc}</p>
      </div>
    </div>
  );
};

export default Approach;
