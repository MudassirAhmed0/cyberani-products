import React from "react";
import Overlays from "./Overlays";
import Image from "next/image";

interface Props {
  banner: { src: string; video?: boolean };
}

const Backgrounds = ({ banner }: Props) => {
  return (
    <div className="atlwh_Full pointer-events-none">
      <Overlays />
      <div className="atlwh_Full z-[-1]">
        {banner?.video ? (
          <video
            muted
            loop
            autoPlay
            playsInline
            className="atlwh_Full object-cover hero-video"
            src={banner?.src}
            preload="auto"
          ></video>
        ) : (
          <Image
            fill
            alt="banner"
            src={banner?.src}
            className="object-cover heroImg"
          />
        )}
      </div>
    </div>
  );
};

export default Backgrounds;
