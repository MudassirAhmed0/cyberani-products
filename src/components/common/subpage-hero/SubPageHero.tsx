"use client";

import React, { useState } from "react";
import Backgrounds from "./backgrounds/Backgrounds";
import MyLightBox from "@/components/common/MyLightBox/Index";
import ContentWrapper from "./ContentWrapper";

interface SubPageHeroProps {
  content: {
    desc: string;
    heading: string;
    showCaseVideo: string;
    banner: { src: string; video?: boolean };
    breadcrumbs: { text: string; link?: string }[];
  };

  arabic?: boolean;
}

const SubPageHero: React.FC<SubPageHeroProps> = ({
  arabic = false,
  content,
}) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [showLightBox, setShowLightBox] = useState<boolean>(false);
  const [showNow, setShowNow] = useState<boolean>(false);

  const handleOpen = () => {
    setShowLightBox(true);
    const container = document.querySelector(".lightboxContainer");
    if (container) {
      container.classList.remove("opacity-0", "pointer-events-none");
    }
    setTimeout(() => {
      setShowNow(true);
    }, 1500);
  };

  return (
    <>
      <section
        id="hero"
        className="minfullVh minfullSvh relative flex items-end lg:pt-[14.3055555556vw] lg:pb-sp120 pt-40 pb-12 sm:pb-[12.3076923077vw] z-[3]"
      >
        <Backgrounds banner={content.banner} />
        <div className="myContainer relative z-[2]">
          <ContentWrapper
            handleOpen={handleOpen}
            setSlideIndex={setSlideIndex}
            breadCrumbs={content.breadcrumbs}
            content={{ desc: content.desc, heading: content.heading }}
            showCaseVideo={content.showCaseVideo}
          />
        </div>
      </section>
      {showLightBox && (
        <MyLightBox
          isAr={arabic}
          slideNo={slideIndex}
          autoPlay
          showNow={showNow}
          setShowNow={setShowNow}
          sources={[{ source: content.showCaseVideo, type: "video" }]}
        />
      )}
    </>
  );
};

export default SubPageHero;
