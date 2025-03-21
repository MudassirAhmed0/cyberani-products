"use client";
import ChevronLink from "@/components/common/link-buttons/ChevronLink";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Categories from "./categories/Categories";
import SubCategories from "./subcategories/SubCategories";

interface DropDownDataItem {
  category: string;
  subCategories: Array<{
    title: string;
    desc?: string;
    link: {
      label: string;
      link: string;
    };
  }>;
}

interface DropDownProps {
  dropDownData: DropDownDataItem[];
  dropDown: React.RefObject<HTMLDivElement | null>; // Updated type
  toggleDropDownMob: (fromSubcategory?: boolean) => void;
  pathname: string;
  arabic: boolean;
}

const DropDown: React.FC<DropDownProps> = ({
  dropDownData,
  dropDown,
  toggleDropDownMob,
  pathname,
  arabic,
}) => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const categories = dropDownData.map((item) => item.category);
  const [offsets, setOffsets] = useState<number[]>([]);
  const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (pathname?.includes("grc-")) {
      setActiveCategory(1);
    } else if (pathname?.includes("offensive-")) {
      setActiveCategory(2);
    } else if (pathname?.includes("ot-")) {
      setActiveCategory(3);
    } else if (pathname?.includes("dfir-")) {
      setActiveCategory(4);
    } else if (pathname?.includes("var-")) {
      setActiveCategory(5);
    }
  }, [pathname]);

  useEffect(() => {
    // Measure heights dynamically
    if (itemsRef.current.length > 0) {
      const newOffsets = itemsRef.current.map((el, index) =>
        index === 0
          ? 0
          : itemsRef.current
              .slice(0, index)
              .reduce((acc, item) => acc + (item?.offsetHeight || 0), 0)
      );
      setOffsets(newOffsets);
    }
  }, []);

  return (
    <div
      ref={dropDown}
      className="group-hover/dropDown:lg:pointer-events-auto group-hover/dropDown:lg:max-h-[100vh] lg:max-h-[0]    opacity-100 lg:pointer-events-none   max-h-0 overflow-hidden lg:overflow-hidden transition-all duration-[800ms] text-white lg:absolute top-0 lrf1 w-full bg-dark-navy drodownContainer"
    >
      <div
        className=" transition-all duration-500"
        style={{
          transform: `translateY(${offsets[activeCategory] || 0}px)`,
        }}
      >
        <img
          src="/images/header/dropdown_active.png"
          alt="dropdown_active"
          className="flipped absolute lg:top-sp72 lrf1 lg:w-[5.625vw] hidden lg:block"
        />
      </div>
      <div className="lg:myContainer lg:pt-sp140 lg:pb-sp40 pt-2.5 wrapper">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-sp60 gap-[30px]">
          <Categories
            categories={categories}
            setActiveCategory={setActiveCategory}
            itemsRef={itemsRef}
            activeCategory={activeCategory}
            toggleDropDownMob={toggleDropDownMob}
          />
          <SubCategories
            dropDownData={dropDownData}
            pathname={pathname}
            activeCategory={activeCategory}
            arabic={arabic}
          />
        </div>
        <div className="flex lg:justify-center lg:mt-sp48 lg:pt-sp20 mt-[30px] lg:border-t lg:border-[#FFFFFF1A]">
          <ChevronLink
            text={"View All Services"}
            link={"/"}
            textClasses={"lg:text14 font-light"}
            svgSizes={"lg:size-sp24 size-6"}
            arabic={arabic}
          />
        </div>
      </div>
      <span className="w-full lg:h-0.5 h-0 bg-light-teal absolute bottom-0 opacity-0 group-hover/dropDown:opacity-[1] delay-[500ms] transition-all duration-[400ms] "></span>
    </div>
  );
};

export default DropDown;
