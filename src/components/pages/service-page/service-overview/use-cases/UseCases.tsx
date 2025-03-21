import TitleDesignLine from "@/components/common/TitleDesignLine";
import React from "react";
import Case from "./Case";

interface Props {
  data: {
    versusData?: {
      title: string;
      desc: string;
    };
    heading: string;
    items: { title: string; desc: string }[];
  };
}

const UseCases = ({ data }: Props) => {
  if (!data) return null;
  return (
    <div className="flex flex-col items-center lg:items-start lg:pb-sp140 lg:pt-sp100 py-[100px] lg:px-sp100 px-5 bg-white lg:border20 lg:rounded-tr-none lg:rounded-tl-none">
      {data?.versusData?.title && (
        <div className="flex flex-col items-center lg:items-start text-center lg:text-start  lg:mb-sp100 mb-[100px]">
          <h2
            dangerouslySetInnerHTML={{ __html: data?.versusData?.title }}
            className="lg:text32 mtext32 font-medium text-gray lg:pb-sp20 pb-5"
          ></h2>
          <TitleDesignLine gradientLine />
          <p className="lg:text18 mtext18 lg:mt-sp24 mt-6">
            {data?.versusData?.desc}
          </p>
        </div>
      )}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
        <h2
          dangerouslySetInnerHTML={{ __html: data?.heading }}
          className="lg:text32 mtext32 font-medium text-gray lg:pb-sp20 pb-5"
        ></h2>
        <TitleDesignLine gradientLine />
      </div>
      <div className="flex justify-between flex-wrap lg:gap-sp32 gap-[72px] lg:mt-sp48 mt-12">
        {data?.items?.map((item, index) => (
          <Case key={index} title={item?.title} desc={item?.desc} />
        ))}
      </div>
    </div>
  );
};

export default UseCases;
