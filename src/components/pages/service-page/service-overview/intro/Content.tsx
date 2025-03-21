import TitleDesignLine from "@/components/common/TitleDesignLine";
import React from "react";

interface Props {
  title: string;
  desc: string;
}

const Content = ({ title, desc }: Props) => {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
      <div className="lg:w-[45.5555555556vw] flex flex-col items-center lg:items-start">
        <div className="flex flex-col items-center lg:items-start">
          <h2
            dangerouslySetInnerHTML={{ __html: title }}
            className="text32 text-gray lg:pb-sp20 pb-5"
          ></h2>
          <TitleDesignLine gradientLine />
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: desc }}
        className="lg:text18 mtext18 lg:w-[57.0833333333vw] lg:mt-sp24 mt-6 flex flex-col lg:gap-y-sp20 defaultList"
      ></div>
    </div>
  );
};

export default Content;
