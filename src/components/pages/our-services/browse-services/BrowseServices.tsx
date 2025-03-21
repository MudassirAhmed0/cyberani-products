"use client";
import TitleDesignLine from "@/components/common/TitleDesignLine";
import React, { useEffect, useRef, useState } from "react";
import Search from "./Search";
import Category from "./Category";
import Card from "./Card";
import { useSearchParams } from "next/navigation";

interface Props {
  arabic?: boolean;
}
const BrowseServices = ({ arabic }: Props) => {
  const [active, setActive] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [services, setServices] = useState<
    { img: string; link: string; title: string }[]
  >([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const updateScroll = (): void => {
    const header = document.querySelector("header") as HTMLElement | null;

    if (!header || !containerRef.current) return;

    const offset = header.offsetHeight;

    const y =
      containerRef?.current?.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const browseServices = [
    {
      category: "Managed Security Operations",
      services: [
        {
          img: "/images/our-services/browse-services/1/1.jpeg",
          link: (arabic ? "/ar" : "") + "/services/mdr",
          title: "Managed Detection and Response (MDR)",
        },
        {
          img: "/images/our-services/browse-services/1/2.jpeg",
          link: (arabic ? "/ar" : "") + "/services/msoc",
          title: "MSOC IT & OT",
        },
        {
          img: "/images/our-services/browse-services/1/3.jpeg",
          link:
            (arabic ? "/ar" : "") +
            "/services/cybersecurity-monitoring-services",
          title: "Cybersecurity Monitoring Services",
        },
        {
          img: "/images/our-services/browse-services/1/4.jpeg",
          link: (arabic ? "/ar" : "") + "/services/brand-protection",
          title: "Brand Protection",
        },
        {
          img: "/images/our-services/browse-services/1/5.jpeg",
          link: (arabic ? "/ar" : "") + "/services/threat-intelligence",
          title: "Threat Intelligence",
        },
      ],
    },
    {
      category: "GRC Services",
      services: [
        {
          img: "/images/our-services/browse-services/2/1.jpeg",
          link: (arabic ? "/ar" : "") + "/services/grc-cybersecurity-strategy",
          title: "(GRC) Cybersecurity Strategy",
        },
        {
          img: "/images/our-services/browse-services/2/2.jpeg",
          link: (arabic ? "/ar" : "") + "/services/grc-cybersecurity-program",
          title: "(GRC) Cybersecurity Program",
        },
        {
          img: "/images/our-services/browse-services/2/3.jpeg",
          link: (arabic ? "/ar" : "") + "/services/grc-cybersecurity-awareness",
          title: "(GRC) Cybersecurity Awareness",
        },
        {
          img: "/images/our-services/browse-services/2/4.jpeg",
          link:
            (arabic ? "/ar" : "") +
            "/services/grc-cybersecurity-risk-assessment",
          title: "(GRC) Cybersecurity Risk Assessment",
        },
        {
          img: "/images/our-services/browse-services/2/5.jpeg",
          link: (arabic ? "/ar" : "") + "/services/grc-compliance-assessment",
          title: "(GRC) Cybersecurity Compliance Assessment",
        },
        {
          img: "/images/our-services/browse-services/2/6.jpeg",
          link:
            (arabic ? "/ar" : "") +
            "/services/grc-cybersecurity-maturity-assessment",
          title: "(GRC) Cybersecurity Maturity Assessment",
        },
      ],
    },
    {
      category: "Offensive Cybersecurity",
      services: [
        {
          img: "/images/our-services/browse-services/3/1.jpeg",
          link:
            (arabic ? "/ar" : "") +
            "/services/offensive-vulnerability-assessment",
          title: "Vulnerability Assessment",
        },
        {
          img: "/images/our-services/browse-services/3/2.jpeg",
          link:
            (arabic ? "/ar" : "") + "/services/offensive-penetration-testing",
          title: "Penetration Testing",
        },
        {
          img: "/images/our-services/browse-services/3/3.jpeg",
          link:
            (arabic ? "/ar" : "") + "/services/offensive-source-code-review",
          title: "Source Code Review",
        },
        {
          img: "/images/our-services/browse-services/3/4.jpeg",
          link: (arabic ? "/ar" : "") + "/services/offensive-red-teaming",
          title: "Red Teaming",
        },
        {
          img: "/images/our-services/browse-services/3/5.jpeg",
          link:
            (arabic ? "/ar" : "") + "/services/offensive-mobile-app-assessment",
          title: "Mobile App Assessment",
        },
        {
          img: "/images/our-services/browse-services/3/6.jpeg",
          link:
            (arabic ? "/ar" : "") + "/services/offensive-web-app-assessment",
          title: "Web App Assessment",
        },
      ],
    },
    {
      category: "OT Cybersecurity",
      services: [
        {
          img: "/images/our-services/browse-services/4/1.jpeg",
          link: (arabic ? "/ar" : "") + "/services/ot-grc",
          title: "OT GRC",
        },
        {
          img: "/images/our-services/browse-services/4/2.jpeg",
          link: (arabic ? "/ar" : "") + "/services/ot-maturity-risk-assessment",
          title: "OT Maturity Risk Assessment",
        },
        {
          img: "/images/our-services/browse-services/4/3.jpeg",
          link: (arabic ? "/ar" : "") + "/services/ot-penetration-testing",
          title: "OT Penetration Testing",
        },
        {
          img: "/images/our-services/browse-services/4/4.jpeg",
          link: (arabic ? "/ar" : "") + "/services/ot-architectural",
          title: "OT Architectural",
        },
        {
          img: "/images/our-services/browse-services/4/5.jpeg",
          link: (arabic ? "/ar" : "") + "/services/ot-auto-assets-discovery",
          title: "OT Automated Asset Discovery Solutions",
        },
        {
          img: "/images/our-services/browse-services/4/6.jpeg",
          link: (arabic ? "/ar" : "") + "/services/ot-dfir",
          title: "OT DFIR",
        },
        {
          img: "/images/our-services/browse-services/4/7.jpeg",
          link: (arabic ? "/ar" : "") + "/services/ot-cybersecurity-program",
          title: "OT Cybersecurity Program",
        },
        {
          img: "/images/our-services/browse-services/4/8.jpeg",
          link: (arabic ? "/ar" : "") + "/services/ot-cybersecurity-projects",
          title: "OT Cybersecurity Projects",
        },
      ],
    },
    {
      category: "DFIR",
      services: [
        {
          img: "/images/our-services/browse-services/5/1.jpeg",
          link:
            (arabic ? "/ar" : "") + "/services/dfir-incident-response-retainer",
          title: "Incident Response Retainer",
        },
        {
          img: "/images/our-services/browse-services/5/2.jpeg",
          link: (arabic ? "/ar" : "") + "/services/dfir-compromise-assessment",
          title: "Compromise Assessment",
        },
        {
          img: "/images/our-services/browse-services/5/3.jpeg",
          link: (arabic ? "/ar" : "") + "/services/dfir-tabletop-exercise",
          title: "Tabletop Exercise",
        },
      ],
    },
    {
      category: "VAR",
      services: [
        {
          img: "/images/our-services/browse-services/6/1.jpeg",
          link: (arabic ? "/ar" : "") + "/services/var-elite-partnerships",
          title:
            "Elite partnerships with leading Cybersecurity Technology vendors",
        },
      ],
    },
  ];
  const categories: string[] = browseServices.map((item) => item.category);

  const searchParams = useSearchParams();
  const searchedCategory = searchParams.get("category");
  useEffect(() => {
    setServices(browseServices[active].services);
  }, [active]);

  useEffect(() => {
    if (search) {
      const filteredServices = browseServices[active].services.filter(
        (service) => service.title.toLowerCase().includes(search.toLowerCase())
      );
      setServices(filteredServices);
    } else {
      setServices(browseServices[active].services);
    }
  }, [search]);

  useEffect(() => {
    if (searchedCategory) {
      setActive(+searchedCategory);
      updateScroll();
    }
  }, []);

  return (
    <section className="lg:pt-sp180 lg:pb-sp110 pt-[110px] pb-[116px] relative z-[2] bg-white">
      <div className="myContainer">
        <div className="flex flex-wrap justify-between items-start lg:gap-sp24 gap-6">
          <div className="flex flex-col items-start">
            <h2 data-aos="fade-up" className="text36 text-gray lg:pb-sp10 pb-4">
              Browse <span className="text-bright-teal">Services</span>
            </h2>
            <TitleDesignLine gradientLine />
          </div>
          <Search setSearch={setSearch} />
        </div>
      </div>
      <div className="lg:myContainer w-full">
        <div
          ref={containerRef}
          data-aos="fade"
          className="px-[5.12820512821vw] sm:px-[4.8vw] lg:px-0 lg:mt-sp48 mt-6 flex whitespace-nowrap lg:whitespace-normal lg:overflow-visible overflow-auto hideScroll lg:gap-x-[3.125vw] gap-x-6"
        >
          {categories.map((category, index) => (
            <Category
              category={category}
              setSearch={setSearch}
              setActive={setActive}
              active={active}
              key={index}
              index={index}
            />
          ))}
        </div>
        <div className="px-[5.12820512821vw] sm:px-[4.8vw] lg:px-0 lg:mt-sp64 mt-8 flex lg:flex-wrap lg:gap-sp40 gap-10 whitespace-nowrap lg:whitespace-normal lg:overflow-visible overflow-auto hideScroll">
          {search && services?.length < 1 ? (
            <>
              <h2 className=" mtext20 lg:text28 font-[500] w-full">
                No services found
              </h2>
            </>
          ) : (
            services?.map((service, index) => (
              <Card
                key={index + active + Math.random()}
                service={service}
                index={index}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default BrowseServices;
