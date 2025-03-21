import React from "react";
import Functions from "./functions/Functions";
import Image from "next/image";
import Content from "./Content";

export interface IntroProps {
  content: {
    title: string;
    desc: string;
  };
  content2?: {
    title: string;
    desc: string;
  };
  functions: {
    heading: string;
    desc: string;
  }[];
  functionHeading: string;
  functionDesc: string;
  uniqueFuction: boolean;
}

const Intro = ({
  content,
  functions,
  functionHeading,
  functionDesc,
  content2,
  uniqueFuction,
}: IntroProps) => {
  return (
    <div className="lg:px-sp100 px-5 bg-white relative lg:pt-sp100 pt-[30px] lg:pb-sp140 pb-[70px] myContainer lg:w-full lg:border20 border15 !rounded-br-none !rounded-bl-none">
      <div className="lg:size-sp160 lg:h-[14.3055555556vw] absolute top-0 lg:mx-sp80 lrf2 hidden lg:block">
        <Image fill src="/images/service-page/shape.png" alt="shape" />
      </div>
      <Content title={content?.title} desc={content?.desc} />
      {content2?.title && (
        <div className="lg:mt-sp100 mt-[100px]">
          <Content title={content2?.title} desc={content2?.desc} />
        </div>
      )}
      <Functions
        functions={functions}
        heading={functionHeading}
        desc={functionDesc}
        uniqueFuction={uniqueFuction}
      />
    </div>
  );
};

export default Intro;
