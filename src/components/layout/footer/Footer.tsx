import React from "react";
import NavigationLinks from "./navigation-links/NavigationLinks";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  arabic: boolean;
}

const Footer = ({ arabic }: FooterProps) => {
  return (
    <footer className="lg:py-sp72 lg:pb-sp16 pb-5 pt-[110px] relative text-white bg-white z-[2]">
      <span className="atlwh_Full formxfooter_overlay2 pointer-events-none flipped"></span>
      <div className="relative z-[2] myContainer">
        {/* <div className="lg:pb-sp48 pb-8 border-b border-[#FFFFFF1A] mb-8 lg:mb-0">
          <NavigationLinks arabic={arabic} />
        </div> */}
        <div className="lg:py-sp20 py-5 gap-10 flex flex-wrap items-center justify-center lg:justify-between">
          <span className="lg:text12 text-[12px]">
            All rights reserved @ 2025
          </span>
          <Link
            href="/"
            className="relative lg:w-[12.3611111111vw] lg:h-[3.88888888889vw] w-[45.641025641vw] h-[14.358974359vw] sm:w-[23vw] sm:h-[7vw]"
          >
            <Image fill alt="logo" src={"/images/icons/footer_logo.svg"} />
          </Link>
          <Link
            href={"https://brackets-tech.com/"}
            target="_blank"
            className="  lg:text12 text-[12px] opacity_Hover"
          >
            Developed By Brackets Technology
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
