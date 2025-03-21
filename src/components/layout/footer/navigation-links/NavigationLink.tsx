import Link from "next/link";
import React from "react";

interface Props {
  navigationLink: {
    title: string;
    links: {
      label: string;
      link: string;
    }[];
  };
}


const NavigationLink = ({ navigationLink }:Props) => {
  return (
    <div className="lg:w-[19.0972222222vw] sm:w-[47%] w-full flex flex-col lg:gap-y-sp16 gap-y-2.5">
      <span className="lg:text12 mtext16 lg:font-bold font-medium">
        {navigationLink.title}
      </span>
      <ul className="lg:text14 mtext14 flex flex-col lg:gap-y-sp10 gap-y-0.5">
        {navigationLink.links.map((link, index) => (
          <li
            key={index}
            className="hover:text-persian-green transition-colors duration-500 cursor-pointer"
          >
            <Link href={`${link.link}`}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationLink;
