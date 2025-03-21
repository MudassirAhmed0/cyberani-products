import React from "react";
import ChevronLink from "../link-buttons/ChevronLink";
import Link from "next/link";
import BackGrounds from "./BackGrounds";

interface Props {
  link?: string;
  formSwiper?: boolean;
  arabic: boolean;
  item: {
    title: string;
    date: string;
    image: string;
  };
}

const NewsBlogsCard = ({ link, formSwiper, arabic, item }: Props) => {
  return (
    <Link
      href={`${link ? (arabic ? "/ar" : "") + link : "/"}`}
      className={`${
        formSwiper
          ? "w-full"
          : "group lg:w-[26.3194444444vw] w-[93.429%] sm:w-[55%] lg:min-w-[26.3194444444vw] sm:min-w-[55%]"
      }  text-white lg:h-[22.5vw] h-[280px] sm:h-[300px] relative lg:border10 border8 overflow-hidden flex items-end lg:pb-sp24 pb-5`}
    >
      <BackGrounds image={item?.image} />
      <div className="relative z-[2] lg:w-[23.5416666667vw] mx-auto w-[89.606%] whitespace-normal">
        <span className="lg:text16 mtext12">{item?.date}</span>
        <h4 className="lg:text20 mtext18 leading-[24px] font-semibold lg:mt-sp10 lg:mb-sp16 mt-3 mb-4">
          {item?.title}
        </h4>
        <ChevronLink
          arabic={arabic}
          tag={"div"}
          text={"Read More"}
          link={"/"}
          textClasses={"lg:text20 mtext18 font-medium"}
        />
      </div>
    </Link>
  );
};

export default NewsBlogsCard;
