import Image from "next/image";
import React from "react";
import DynamicBreadCrumbs from "../DynamicBreadCrumbs";
import Lottie from "lottie-react";
import playAnimation from "../../../../public/jsons/JSON-01.json";
interface Props {
  handleOpen: () => void;
  setSlideIndex: (index: number) => void;
  breadCrumbs: { text: string; link?: string }[];
  content: { heading: string; desc?: string };
  showCaseVideo?: string;
  arabic?: boolean;
}

const ContentWrapper = ({
  handleOpen,
  setSlideIndex,
  breadCrumbs,
  content,
  showCaseVideo,
  arabic,
}: Props) => {
  return (
    <div className="lg:w-[66.8055555556vw] text-white flex flex-col lg:gap-y-sp56 gap-y-8 items-center lg:items-start text-center lg:text-start">
      <div className="flex flex-col lg:gap-y-sp32 gap-y-4">
        <DynamicBreadCrumbs arabic={arabic} breadCrumbs={breadCrumbs} />
        <div>
          <h1
            dangerouslySetInnerHTML={{ __html: content.heading }}
            data-aos-anchor="#hero"
            data-aos="fade-up"
            className="text48 lg:leading-[4.16666666667vw]"
          ></h1>
          {content.desc && (
            <p
              data-aos-anchor="#hero"
              data-aos="fade-down"
              className="lg:text20 mtext18 lg:mt-sp10 mt-4"
            >
              {content.desc}
            </p>
          )}
        </div>
      </div>
      {showCaseVideo && (
        <button
          onClick={() => {
            handleOpen();
            setSlideIndex(0);
          }}
          className="opacity_Hover hidden lg:flex items-center"
        >
          <div className="relative lg:size-[4.86111111111vw] size-[70px] flipped">
            <Lottie
              animationData={playAnimation}
              loop
              autoplay
              className="mix-blend-plus-lighter transform scale-[1.4]"
            />
          </div>
          <span className="lg:text24 font-medium mtext18">Watch a Video</span>
        </button>
      )}
    </div>
  );
};

export default ContentWrapper;
