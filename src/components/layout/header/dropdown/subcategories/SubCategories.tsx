"use client";
import ChevronLink from "@/components/common/link-buttons/ChevronLink";
import useResponsivness from "@/hooks/useResponsivness";
import Link from "next/link";
import React from "react";

interface SubCategory {
  title: string;
  desc?: string;
  link: {
    label: string;
    link: string;
  };
}

interface DropDownDataItem {
  category: string;
  subCategories: SubCategory[];
}

interface SubCategoriesProps {
  dropDownData: DropDownDataItem[];
  activeCategory: number;
  pathname: string;
  arabic: boolean;
}

const SubCategories: React.FC<SubCategoriesProps> = ({
  dropDownData,
  activeCategory,
  pathname,
  arabic,
}) => {
  const { isDesktop } = useResponsivness();
  const subCategories = dropDownData[activeCategory].subCategories;

  return (
    <div className="flex flex-wrap items-start lg:gap-x-sp50 lg:gap-y-sp48 gap-5 font-light">
      {subCategories.map((subCategory, index) => {
        let isActive = subCategory.link.link === pathname;
        console.log(subCategory.link.link, pathname);
        return (
          <Link
            key={index}
            href={`${subCategory.link.link}`}
            className="flex flex-col lg:gap-y-sp10 lg:w-[13.8888888889vw] w-full group active"
          >
            <span
              style={{
                backgroundImage:
                  "linear-gradient(270deg, #006CB7 0%, #00A777 100%)",
              }}
              className={`lg:text14 mtext14 group-hover:text-transparent bg-clip-text transition-all duration-500 underline underline-offset-2 lg:no-underline ${isActive ? "!text-transparent" : ""}`}
            >
              {subCategory.title}
            </span>
            {isDesktop && (
              <>
                <p className="line-clamp-2 lg:text12">{subCategory.desc}</p>
                <ChevronLink
                  isActive={isActive}
                  arabic={arabic}
                  tag={"div"}
                  text={"Explore MDR"}
                  link={"/"}
                  textClasses={"lg:text12"}
                  svgSizes={"lg:size-sp18"}
                />
              </>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default SubCategories;
