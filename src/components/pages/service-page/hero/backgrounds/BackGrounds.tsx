import React from "react";
import Overlays from "./Overlays";
import Image from "next/image";

interface BackGroundsProps {
  src: string;
}

const BackGrounds: React.FC<BackGroundsProps> = ({
  src = "/images/service-page/hero.jpg",
}) => {
  return (
    <div className="atlwh_Full">
      <Overlays />
      <div className="atlwh_Full z-[-1]">
        <Image fill alt="banner" src={src} className="object-cover" priority />
      </div>
    </div>
  );
};

export default BackGrounds;
