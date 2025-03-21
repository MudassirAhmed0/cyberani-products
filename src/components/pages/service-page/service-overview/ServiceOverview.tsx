import React from "react";
import Intro from "./intro/Intro";
import Features from "./features/Features";
import UseCases from "./use-cases/UseCases";

interface Props {
  content: {
    intro: {
      title: string;
      desc: string;
      content2: {
        title: string;
        desc: string;
      };
      functions: { heading: string; desc: string }[];
      functionHeading: string;
      functionDesc: string;
      uniqueFuction: boolean;
    };
    features: {
      heading: string;
      items: {
        heading: string;
        desc: string;
      }[];
    };
    useCasesData: {
      versusData?: {
        title: string;
        desc: string;
      };
      heading: string;
      items: {
        title: string;
        desc: string;
      }[];
    };
  };
}

const ServiceOverview = ({ content }: Props) => {
  return (
    <section className="lg:mt-[-46.125vh] mt-[-435px] relative bg-[#01284f]">
      <span className="atlwh_Full top-[unset] bottom-0 bg-dark-navy h-[93%] pointer-events-none"></span>
      <div className="lg:w-[87.5vw] w-full mx-auto lg:pb-sp100 lg:border lg:border20 lg:border-[#0000001a] relative z-[2]">
        <Intro
          content={content?.intro}
          content2={content?.intro?.content2}
          functions={content?.intro?.functions}
          functionHeading={content?.intro?.functionHeading}
          uniqueFuction={content?.intro?.uniqueFuction}
          functionDesc={content?.intro?.functionDesc}
        />
        <Features features={content?.features} />
        <UseCases data={content?.useCasesData} />
      </div>
    </section>
  );
};

export default ServiceOverview;
