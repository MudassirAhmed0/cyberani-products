"use client";
import React, { use, useEffect } from "react";
import Search from "./Search";
import SortDropDown from "./SortDropDown";
import Image from "next/image";
import ChevronLink from "@/components/common/link-buttons/ChevronLink";
import Link from "next/link";
import Pagination from "./Pagination";
import TitleDesignLine from "@/components/common/TitleDesignLine";
import NewsBlogsCard from "@/components/common/news-blogs-card/NewsBlogsCard";

interface Props {
  content: {
    link: string;
    fromBlogs?: boolean;
  };
  arabic: boolean;
}

export const newsCards = [
  {
    title: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "24 Jul 2024",
    image: "/images/media-center/news/1.jpg",
    link: "/news-blogs-singlepage",
  },
  {
    title: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "24 Jul 2024",
    image: "/images/media-center/news/1.jpg",
    link: "/news-blogs-singlepage",
  },
  {
    title: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "24 Jul 2024",
    image: "/images/media-center/news/1.jpg",
    link: "/news-blogs-singlepage",
  },
  {
    title: "4Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "24 Jul 2024",
    image: "/images/media-center/news/1.jpg",
    link: "/news-blogs-singlepage",
  },

  {
    title: "5Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "24 Jul 2024",
    image: "/images/media-center/news/1.jpg",
    link: "/news-blogs-singlepage",
  },
  {
    title: "6Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "24 Jul 2024",
    image: "/images/media-center/news/1.jpg",
    link: "/news-blogs-singlepage",
  },
];

interface CardProps {
  title: string;
  date: string;
  image: string;
  link: string;
}

const NewsBlogsContainer = ({ content, arabic }: Props) => {
  const [cards, setCards] = React.useState<CardProps[]>(newsCards);
  const [searchedCards, setSearchedCards] = React.useState<CardProps[]>(cards);
  const [search, setSearch] = React.useState("");
  const [sort, setSort] = React.useState("newest");
  useEffect(() => {
    setSearchedCards(
      cards.filter((card) => card.title.toLowerCase().includes(search))
    );
  }, [search, cards]);

  return (
    <section
      className={`${
        content.fromBlogs
          ? "lg:py-sp140 pt-[150px] pb-[130px] text-black"
          : "lg:py-sp160 pt-10 pb-[130px] bg-dark-navy text-white"
      }`}
    >
      <div className="myContainer flex flex-col lg:items-start items-center lg:gap-y-sp48 gap-y-12">
        <div className="flex flex-col items-start">
          {content.fromBlogs ? (
            <h2 className={`lg:text32 mtext32 font-medium lg:pb-sp10 pb-5`}>
              Our{""}
              {""} <span className={`text-bright-teal`}>Blogs</span>
            </h2>
          ) : (
            <h2 className={`lg:text32 mtext32 font-medium lg:pb-sp10 pb-5`}>
              Latest News
            </h2>
          )}

          <TitleDesignLine {...(content.fromBlogs && { gradientLine: true })} />
        </div>
        <div className="flex flex-wrap lg:gap-sp20 justify-between gap-6 w-full">
          <Search fromBlogs={content.fromBlogs} setSearch={setSearch} />
          <SortDropDown fromBlogs={content.fromBlogs} />
        </div>
      </div>
      <div className="px-[5.12820512821vw] sm:px-[4.8vw] lg:px-0 lg:myContainer flex gap-5 lg:gap-sp48 my-12 lg:my-sp48 lg:justify-between whitespace-nowrap lg:whitespace-normal overflow-auto lg:overflow-visible hideScroll lg:flex-wrap">
        {searchedCards.map((item, index) => (
          <NewsBlogsCard
            key={index}
            link={content.link}
            item={item}
            arabic={arabic}
          />
        ))}
      </div>
      <Pagination fromBlogs={content.fromBlogs} />
    </section>
  );
};

export default NewsBlogsContainer;
