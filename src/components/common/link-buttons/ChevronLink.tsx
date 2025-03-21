import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ChevronLinkProps {
  link?: string;
  text?: string;
  textClasses?: string;
  svgSizes?: string;
  arabic?: boolean;
  tag?: React.ElementType;
  isLoading?: boolean;
  isActive?: boolean;
  translationText?: string;
}

const ChevronLink: React.FC<ChevronLinkProps> = ({
  link,
  text,
  textClasses,
  svgSizes,
  arabic = false,
  tag: Tag = Link,
  isLoading = false,
  translationText,
  isActive,
}) => {
  if (!text) {
    return null;
  }

  return (
    <Tag
      {...(Tag === Link ? { href: link } : {})}
      className={`${
        isLoading ? "pointer-events-none" : ""
      } ${textClasses} group capitalize flex items-center lg:gap-0 gap-2.5`}
    >
      <span
        className={`lg:text-white ${isActive ? "lg:text-bright-teal" : ""} group-hover:lg:text-bright-teal text-bright-teal transition-all duration-500`}
      >
        {isLoading ? translationText : text}
      </span>
      {!isLoading && (
        <div
          className={`${
            arabic
              ? ` lg:group-hover:-translate-x-sp10 group-hover:translate-x-[-1vw]`
              : ` lg:group-hover:translate-x-sp10 group-hover:translate-x-[1vw]`
          } ${
            svgSizes ? svgSizes : "lg:size-sp24 size-6"
          } transition-all duration-300`}
        >
          <svg
            className="size-full flipped"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              d="M9.129 9.96284C9.129 9.48263 8.93823 9.02208 8.59867 8.68251L5.754 5.83784L6.8145 4.77734L12 9.96284L6.8145 15.1483L5.754 14.0878L8.59867 11.2432C8.93823 10.9036 9.129 10.4431 9.129 9.96284Z"
              className={`${isActive ? "lg:fill-bright-teal" : ""} lg:fill-white group-hover:lg:fill-bright-teal fill-bright-teal transition-all duration-500`}
            />
          </svg>
        </div>
      )}
    </Tag>
  );
};

export default ChevronLink;
