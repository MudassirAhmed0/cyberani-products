import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  arabic?: boolean;
  breadCrumbs: { text: string; link?: string }[];
}

const DynamicBreadCrumbs = ({ arabic, breadCrumbs }:Props) => {
  return (
    <div
      data-aos="fade"
      data-aos-delay='300'
      className="flex flex-wrap items-center justify-center lg:justify-normal lg:gap-x-[0.48611111111vw] gap-[7px] capitalize lg:text20 mtext18 font-medium text-inherit"
    >
      <Link
        href={(arabic ? "/ar" : "/en") + "/"}
        className="flex items-center lg:gap-x-[0.48611111111vw] gap-[7px] opacity_Hover"
      >
        <div className="opacity_Hover relative lg:size-sp24 size-6">
          <Image fill src="/images/icons/home.svg" alt="home-icon" />
        </div>
        <span className="hidden lg:block">home</span>
      </Link>
      {breadCrumbs?.map((breadCrumb, index) => (
        <React.Fragment key={index}>
          <span>/</span>

          {breadCrumb.link ? (
            <Link href={`${breadCrumb.link}`} className="opacity_Hover">
              {breadCrumb.text}
            </Link>
          ) : (
            <span>{breadCrumb.text}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default DynamicBreadCrumbs;
