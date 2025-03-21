import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  service: { img: string; title: string; link: string };
  index: number;
}

const Card = ({ service, index }: Props) => {
  return (
    <Link
      href={`${service.link}`}
      data-aos="fade"
      data-aos-delay={(index % 4) * 100}
      className="group lg:min-w-[19.4444444444vw] lg:w-[19.4444444444vw] min-w-[80%] w-[80%] sm:min-w-[280px] sm:w-[280px]"
    >
      <div className="w-full lg:h-[17.3611111111vw] relative h-[250px] border20 overflow-hidden flex items-end lg:pb-sp18 pb-[18px] lg:pt-sp24 pt-6">
        <div className="atlwh_Full pointer-events-none">
          <span className="atlwh_Full our_services_card_overlay "></span>
          <div className="atlwh_Full overflow-hidden opacity-[0.2]">
            <Image
              fill
              alt="banner"
              src={service.img}
              className="object-cover group-hover:scale-[1.04] transition-all duration-500"
            />
          </div>
          <div className="lg:size-sp48 size-12 absolute lrf2 z-[2] lg:top-sp24 top-6 lg:mx-sp24 mx-6 group-hover:mx-0 transition-all duration-300 flipped">
            <Image
              fill
              alt="chevron"
              src={"/images/icons/browse_services_card_chevron.svg"}
            />
          </div>
        </div>
        <div className="relative z-[2] flex items-end text-white lg:w-[16.25vw] w-[83.577%] mx-auto h-full">
          <div className="flex flex-col lg:gap-y-[0.97222222222vw] gap-3 whitespace-normal">
            <span className="button_gradient w-full h-[1px]"></span>
            <p className="lg:text20 mtext20 font-medium">{service.title}</p>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden items-center gap-[5px] mt-8">
        <span className="mtext18 font-semibold gradient_text">
          {index < 9 && 0}
          <span>{index + 1}</span>
        </span>
        <span className="mtext18">Services</span>
      </div>
    </Link>
  );
};

export default Card;
