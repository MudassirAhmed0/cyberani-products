import Image from "next/image";
import React from "react";

const BackGrounds = () => {
  return (
    <div className="atlwh_Full pointer-events-none">
      <span className="atlwh_Full bg-[#01284f]"></span>
      <div className="atlwh_Full">
        <Image
          fill
          alt="bg"
          src={"/images/service-page/feature.jpeg"}
          className="object-cover opacity-[0.2]"
        />
      </div>
      <span className="atlwh_Full service_feature_overlay z-[1]"></span>
      <img
        src="/images/service-page/mob-indicator.png"
        alt="indicator"
        className="w-[49.744%] absolute top-0 left-1/2 -translate-x-1/2 block lg:hidden z-[2]"
      />
    </div>
  );
};

export default BackGrounds;
