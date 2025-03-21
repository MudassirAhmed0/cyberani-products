import React from "react";
import BackGrounds from "./backgrounds/BackGrounds";
import DynamicBreadCrumbs from "@/components/common/DynamicBreadCrumbs";

interface Props {
  content: {
    title: string;
    breadCrumbs: { text: string; link?: string }[];
  };
}

const Hero = ({ content }: Props) => {
  return (
    <section className="relative min-h-[840px] lg:minfullVh lg:minfullSvh flex items-start lg:pt-[33.625vh] pt-[250px] z-[2]">
      <BackGrounds />
      <div className="relative z-[2] myContainer text-white">
        <div className="lg:w-[82.9166666667vw] flex flex-col lg:gap-y-[4vh] gap-y-4 lg:items-start items-center lg:text-start text-center">
          <DynamicBreadCrumbs breadCrumbs={content.breadCrumbs} />
          <h1
            data-aos="fade-up"
            dangerouslySetInnerHTML={{ __html: content.title }}
            className="text40"
          ></h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
