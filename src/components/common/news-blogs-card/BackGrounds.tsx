import Image from "next/image";
import React from "react";

interface Props {
  image: string;
}

const BackGrounds = ({ image }: Props) => {
  return (
    <div className="atlwh_Full">
      <span className="atlwh_Full news_blog_card_overlay z-[1]"></span>
      <div className="atlwh_Full">
        <Image
          fill
          alt="banner"
          src={image}
          className="object-cover group-hover:lg:scale-[1.09] transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default BackGrounds;
