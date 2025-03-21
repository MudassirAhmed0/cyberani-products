import Image from "next/image";
import React from "react";

interface Props {
  data: {
    img: string;
    title: string;
    desc: string;
  };
  index: number;
}

const Card = ({ data, index }: Props) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-delay={index * 100}
      className={`lg:w-[17.5vw] first:lg:w-[21.1111111111vw] last:lg:w-[19.9305555556vw] flex flex-col items-center lg:items-start text-center lg:text-start`}
    >
      <div className="lg:size-sp72 size-[72px] relative">
        <Image fill alt="icon" src={data.img} />
      </div>
      <h4 className="lg:text24 mtext24 font-medium lg:mt-sp16 mt-4">
        {data.title}
      </h4>
      <p className="lg:text18 mtext18 lg:mt-sp10 mt-4">{data.desc}</p>
    </div>
  );
};

export default Card;
