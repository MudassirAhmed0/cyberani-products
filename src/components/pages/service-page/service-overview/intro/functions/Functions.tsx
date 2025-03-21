import TitleDesignLine from "@/components/common/TitleDesignLine";
import React from "react";
import Function from "./Function";
import UniqueFunction from "./UniqueFunction";

interface Props {
  functions: {
    heading: string;
    desc: string;
  }[];
  heading: string;
  desc: string;
  uniqueFuction: boolean;
}

const Functions = ({ functions, heading, desc, uniqueFuction }: Props) => {
  if (!functions) return null;
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-start lg:mt-sp150 mt-[100px]">
      {" "}
      <div className="lg:w-[60.6944444444vw] w-[82.582%] flex flex-col items-center lg:items-start">
        <div className="flex flex-col items-center lg:items-start">
          {" "}
          <h2
            dangerouslySetInnerHTML={{ __html: heading }}
            className="text32 text-gray lg:pb-sp20 pb-5"
          ></h2>
          <TitleDesignLine gradientLine />
          {desc && (
            <p className="lg:text18 mtext18 lg:mt-sp24 mt-6">{desc && desc}</p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap justify-between lg:items-start lg:gap-x-sp48 lg:gap-y-sp32 gap-8 lg:mt-sp32 mt-8">
        {functions?.map((funtion, index) =>
          uniqueFuction ? (
            <UniqueFunction funtion={funtion} key={index} index={index} />
          ) : (
            <Function funtion={funtion} key={index} index={index} />
          )
        )}
      </div>
    </div>
  );
};

export default Functions;
