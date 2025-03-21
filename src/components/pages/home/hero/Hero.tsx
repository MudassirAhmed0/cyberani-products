"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Backgrounds from "./backgrounds/Backgrounds";
import MyLightBox from "@/components/common/MyLightBox/Index";
import Lottie from "lottie-react";
import playAnimation from "../../../../../public/jsons/JSON-01.json";

interface Props {
  arabic: boolean;
}

const Hero = ({ arabic }: Props) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [showLightBox, setShowLightBox] = useState<boolean>(false);
  const [showNow, setShowNow] = useState<boolean>(false);

  const handleOpen = () => {
    setShowLightBox(true);

    // if (container) {
    if (!showLightBox) {
      setTimeout(() => {
        const container = document.querySelector(".lightboxContainer");

        container?.classList.remove("opacity-0");
        container?.classList.remove("pointer-events-none");
        setShowNow(true);
      }, 1500);
    } else {
      const container = document.querySelector(".lightboxContainer");

      container?.classList.remove("opacity-0");
      container?.classList.remove("pointer-events-none");
      setTimeout(() => {
        setShowNow(true);
      }, 1500);
    }
    // }
  };

  return (
    <>
      <section className="minfullVh minfullSvh relative z-[2] flex items-end lg:pt-[14.3055555556vw] lg:pb-[9.51388888889vw] py-40">
        <Backgrounds />
        <div className="myContainer relative z-[2]">
          <div className="lg:w-[44.3055555556vw] text-white flex flex-col items-center lg:items-start text-center lg:text-start">
            <h1 data-aos="fade-up" className="text40">
              Protecting Cyberspace
            </h1>
            <p
              data-aos="fade-down"
              className="lg:text24 mtext18 lg:w-[43.2638888889vw] lg:mt-sp10 mt-2.5"
            >
              Next-generation cybersecurity services for industry leaders in KSA
              and beyond.
            </p>
            <button
              data-aos="fade"
              data-aos-delay="200"
              onClick={() => {
                handleOpen();
                setSlideIndex(0);
              }}
              className="opacity_Hover flex items-center lg:mt-sp32 mt-8"
            >
              <div className="relative lg:size-[4.86111111111vw] size-[70px] flipped">
                <Lottie
                  animationData={playAnimation}
                  loop
                  autoplay
                  className="mix-blend-plus-lighter transform scale-[1.4]"
                />
              </div>
              <span className="lg:text24 font-medium mtext18">
                Watch a Video
              </span>
            </button>
          </div>
        </div>
      </section>
      {showLightBox && (
        <MyLightBox
          isAr={arabic}
          slideNo={slideIndex}
          autoPlay
          showNow={showNow}
          setShowNow={setShowNow}
          sources={[
            { source: "/videos/hero_showcase_home.mp4", type: "video" },
          ]}
        />
      )}
    </>
  );
};

export default Hero;
