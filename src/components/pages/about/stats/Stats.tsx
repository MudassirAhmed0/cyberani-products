import Image from "next/image";
import React from "react";
import CardsWrapper from "./CardsWrapper";
import TitleDesignLine from "@/components/common/TitleDesignLine";

interface Props {
  content: {
    title: string;
    stats: {
      title: string;
      description: string;
    }[];
  };
}

const Stats = ({ content }: Props) => {
  return (
    <section className={`lg:py-sp160 py-[100px] relative bg-white z-[3]`}>
      <div className="lg:w-[86.1111111111vw] w-[79.489%] mx-[auto] flex flex-col items-start lg:gap-y-[5.97222222222vw] gap-y-12">
        <div>
          <h2
            dangerouslySetInnerHTML={{ __html: content.title }}
            data-aos="fade-up"
            className="text36 text-gray lg:pb-sp10 pb-4"
          ></h2>
          <TitleDesignLine gradientLine />
        </div>

        <CardsWrapper data={content.stats} />
      </div>
    </section>
  );
};

export default Stats;
